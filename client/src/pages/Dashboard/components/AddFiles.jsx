import React from 'react'
import { Frame } from './styles/AddMultiImage.styled'
import { LoadFile, LoadedFile } from './styles/AddFiles.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { RemovedButton } from './styles/AddOneImage.styled'
import _FileIcon from '@/components/_FileIcon';

const AddFiles = ({ files, handleChange, removeFunc }) => {
  // console.log(files);


  return (
    <Frame>
      {
        files?.map((k, i) => (
          <LoadedFile onClick={() => { window.open(k.url, "_blank") }} style={{ position: "relative" }} key={i}>
            <_FileIcon fileName={k.file.name} />
            <input onClick={(e) => {
              e.stopPropagation();
            }}
              type="text"
              value={k.title}
              name='file_name'
              maxLength={20}
              onChange={(e) => handleChange(e, i)}
              style={{
                textAlign: "center",
                outline: "none",
                margin: "6px 0"
              }}
            />
            <RemovedButton style={{ fontSize: ".8rem" }}
              onClick={(e) => {
                e.stopPropagation();
                removeFunc(k.url);
              }}>
              <FontAwesomeIcon icon={faTrashCan} />
            </RemovedButton>
          </LoadedFile>
        ))
      }
      {
        files.length < 8 &&
        <LoadFile>
          <FontAwesomeIcon icon={faFileCirclePlus} />
          <input
            name='files'
            type="file"
            multiple
            accept="*"
            onChange={handleChange}
            value={''}
            style={{
              display: "none"
            }} />
        </LoadFile>
      }
    </Frame>
  )
}

export default AddFiles