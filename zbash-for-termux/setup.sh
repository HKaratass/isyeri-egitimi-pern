#!/bin/bash

function database() {
    clear
    # ON KURULUM İÇİN
    echo -n "PORT -> "
    read DATABASE_PORT
    export DATABASE_PORT=$DATABASE_PORT
    while true; do
        echo
        echo "1 - Do you want to start the postgresql?"
        echo "2 - Do you want to format the database?"
        echo "3 - Do you want to create tables the database?"
        echo "4 - Do you want to seed the database?"
        echo "0 - Exit"
        echo
        echo -n "Your Choice -> "
        read caseResponse

        case $caseResponse in
            1)
                while true; do
                clear
                echo
                echo -n "Do you want to start the postgresql? [y/n] -> "
                read response
                if [ "$response" == "y" ]; then
                    echo "Database starting..."
                    pg_ctl -D $PREFIX/var/lib/postgresql/data start
                    echo "Database started."
                    echo
                    echo
                    break
                    elif [ "$response" == "n" ]; then
                    echo
                    echo
                    break
                fi
                done
            ;;
            2)
                while true; do
                clear
                echo
                echo -n "Do you want to format the database? [y/n] -> "
                read response
                if [ "$response" == "y" ]; then
                    pushd ../server
                    echo "Database formating..."
                    npm run knex migrate:rollback --all
                    popd
                    echo "Database formated."
                    echo
                    echo
                    break
                    elif [ "$response" == "n" ]; then
                    echo
                    echo
                    break
                fi
                done
            ;;

            3)
                while true; do
                clear
                echo
                echo -n "Do you want to create tables the database? [y/n] -> "
                read response
                if [ "$response" == "y" ]; then
                    pushd ../server
                    echo "Tables creating..."
                    npm run knex migrate:latest
                    popd
                    echo "Tables created."
                    echo
                    echo
                    break
                    elif [ "$response" == "n" ]; then
                    echo
                    echo
                    break
                fi
                done
            ;;

            4)
                while true; do
                clear
                echo
                echo -n "Do you want to seed the database? [y/n] -> "
                read response
                if [ "$response" == "y" ]; then
                    pushd ../server
                    echo "Database filling..."
                    npm run knex seed:run
                    popd
                    echo "Database filled."
                    echo
                    echo
                    break
                    elif [ "$response" == "n" ]; then
                    echo
                    echo
                    break
                fi
                done
            ;;

            0)
                return 0
            ;;

            *)
                clear
                echo
            ;;
        esac
    done
}



while true; do
    clear
    echo
    echo "1 - Databese configration"
    echo "2 - Do you want to start redis on screen?"
    echo "3 - Do you want to install dependencies on client?"
    echo "4 - Do you want to install dependencies on server?"
    echo "5 - Do you want to build the client?"
    echo "6 - Do you want to copy dist to html? (Will DELETED /html)"
    echo "7 - Do you want to start nginx?"
    echo "8 - Do you want to start express on screen?"
    echo "0 - Exit"
    echo
    echo -n "Your Choice -> "
    read caseResponse

    case $caseResponse in
        1)
            database
        ;;

        2)
            while true; do
            echo -n "Do you want to start redis on screen? [y/n] -> "
            read response
            if [ "$response" == "y" ]; then
                echo "Redis starting..."
                screen -dmS redis-screen redis-server
                echo "Redis started."
                break
                elif [ "$response" == "n" ]; then
                break
            fi
            done
        ;;

        3)
            while true; do
            echo -n "Do you want to install dependencies on client? [y/n] -> "
            read response
            if [ "$response" == "y" ]; then
                pushd ../client
                echo "Installing..."
                npm i
                popd
                echo "Installed."
                break
                elif [ "$response" == "n" ]; then
                break
            fi
            done
        ;;

        4)
            while true; do
            echo -n "Do you want to install dependencies on server? [y/n] -> "
            read response
            if [ "$response" == "y" ]; then
                pushd ../server
                echo "Installing..."
                npm i
                popd
                echo "Installed."
                break
                elif [ "$response" == "n" ]; then
                break
            fi
            done
        ;;

        

        5)
            while true; do
            echo -n "Do you want to build the client? [y/n] -> "
            read response
            if [ "$response" == "y" ]; then
                pushd ../client
                echo "Building..."
                echo -n "Please enter the value (only ip) for VITE_API_URL: "
                read viteApiUrl
                source ./.env 
                export VITE_API_URL="http://$viteApiUrl:1071"
                npm run build
                popd
                echo "Builded."
                break
                elif [ "$response" == "n" ]; then
                break
            fi
            done
        ;;

        6)
            while true; do
            echo -n "Do you want to copy dist to html? (Will DELETED /html) [y/n] -> "
            read response
            if [ "$response" == "y" ]; then
                pushd ../client
                echo "Copying..."
                rm -rf /data/data/com.termux/files/usr/share/nginx/html/*
                cp -r dist/* /data/data/com.termux/files/usr/share/nginx/html
                popd
                echo "Copyed."
                break
                elif [ "$response" == "n" ]; then
                break
            fi
            done
        ;;

        7)
            while true; do
            echo -n "Do you want to start nginx? [y/n] -> "
            read response
            if [ "$response" == "y" ]; then
                echo "Starting..."
                nginx
                echo "Started."
                break
                elif [ "$response" == "n" ]; then
                break
            fi
            done
        ;;

        8)
            while true; do
            echo -n "Do you want to start express on screen? [y/n] -> "
            read response
            if [ "$response" == "y" ]; then
                pushd ../server
                mkdir .temp
                echo "Created .temp folder"
                echo "Express Starting..."
                echo -n "Please enter the value (only ip:port) for CLIENT_URL: "
                read clientUrl
                echo -n "Please enter the value for DATABASE_PORT: "
                read dbPort
                screen -d -m bash -c "source ./.env && export CLIENT_URL=\"http://$clientUrl\" && export DATABASE_PORT=\"$dbPort\" && npm start"
                popd
                echo "Express Started."
                break
                elif [ "$response" == "n" ]; then
                break
            fi
            done
        ;;

        0)
            echo "READY"
            exit 0
        ;;

        *)

        ;;
    esac

done


