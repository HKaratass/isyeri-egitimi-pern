from flask import Flask, send_file, request, make_response, abort
from flask_cors import CORS
from captcha.image import ImageCaptcha
import random
import secrets
import redis

app = Flask(__name__)
# CORS(app, origins="http://localhost:1453", supports_credentials=True) # docker off
rc = redis.Redis(host='redis_db', port=6379, db=0) # docker on
# rc = redis.Redis(host='localhost', port=6379, db=0) # docker off

@app.route('/')
def not_acceptable():
    abort(406)

@app.route('/token')
def generate_token():
    token = secrets.token_hex(12)
    p = "ABCDEFGHIJKLMNOPRSTUVYZXQ23456789"
    captcha_text = ''.join(random.choice(p) for _ in range(6))
    rc.set(token, captcha_text, ex=60)
    resp = make_response(token)  
    # resp.set_cookie('_CTKN', token, domain='localhost', httponly = True) # dokcer off
    resp.set_cookie('_CTKN', token, domain='proje.isyeriegitimi.com', httponly = True) # docker on
    return resp

@app.route('/generate')
def generate_captcha():
    token = request.args.get('token')
    if not rc.exists(token):
        return 'Invalid or missing token.', 400

    captcha_text = rc.get(token).decode('utf-8')
    if captcha_text[0:1] == '*': #MANTIKLI OLAN BU
        return "USED"
    rc.set(token, f'*{captcha_text}', ex=75)
    image = ImageCaptcha(width=280, height=90, font_sizes=[40, 50])
    data = image.generate(captcha_text)

    return send_file(data, mimetype='image/png')

@app.route('/token_paper')
def generate_token_for_paper():
    token = secrets.token_hex(10)
    p = "ABCDEFGHIJKLMNOPRSTUVYZXQ23456789"
    captcha_text = ''.join(random.choice(p) for _ in range(5))
    rc.set(token, captcha_text, ex=60)
    resp = make_response(token)  
    # resp.set_cookie('_CTKNp', token, domain='localhost', httponly = True) # dokcer off
    resp.set_cookie('_CTKNp', token, domain='proje.isyeriegitimi.com', httponly = True) # docker on
    return resp

@app.route('/generate_paper')
def generate_captcha_for_paper():
    token = request.args.get('token')
    if not rc.exists(token):
        return 'Invalid or missing token.', 400

    captcha_text = rc.get(token).decode('utf-8')
    if captcha_text[0:1] == '*': #MANTIKLI OLAN BU
        return "USED"
    rc.set(token, f'*{captcha_text}', ex=3000)
    image = ImageCaptcha(width=150, height=40, font_sizes=[30, 40])
    data = image.generate(captcha_text)

    return send_file(data, mimetype='image/png')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1072)