import { faFile, faFileAudio, faFileExcel, faFilePdf, faFilePowerpoint, faFileVideo, faFileWord, faFileZipper } from '@fortawesome/free-solid-svg-icons'
import { IconStyle } from './styles/_FileIcon.styled';

function _FileIcon({fileName}) {
    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1) {
        return <IconStyle $COLOR='#ffd45e' icon={faFile} />;
    }
    const extension = fileName.slice(lastDotIndex + 1);
    switch (extension) {
        case "pdf": return <IconStyle $COLOR='#ED2224' icon={faFilePdf} />;
        case "docx": //word first
        case "doc":
        case "dotx":
        case "docm":
        case "dotm":
        case "docb": return <IconStyle $COLOR='#185abd' icon={faFileWord} />;
        case "zip":
        case "7z":
        case "rar": return <IconStyle $COLOR='#ffd45e' icon={faFileZipper} />
        case "pptx": //powerpoint first
        case "ppt":
        case "pps":
        case "ppsx":
        case "pptm":
        case "potx":
        case "potm": return <IconStyle $COLOR='#c43e1c' icon={faFilePowerpoint} />
        case "xlsx": //excel first
        case "xls":
        case "xlsm":
        case "xlsb":
        case "xltm":
        case "xltx": return <IconStyle $COLOR='#107c41' icon={faFileExcel} />
        case "mp3": //audio first
        case "waw":
        case "ogg":
        case "flac":
        case "aac":
        case "m4a":
        case "wma": return <IconStyle $COLOR='#552B3C' icon={faFileAudio} />
        case "mp4": //video first
        case "avi":
        case "mov":
        case "wmv":
        case "flv":
        case "mkv":
        case "webm":
        case "mpg":
        case "mpeg": return <IconStyle $COLOR='#FFA500' icon={faFileVideo} />



        default: return <IconStyle $COLOR='#ffd45e' icon={faFile} />;
    }
}

export default _FileIcon
