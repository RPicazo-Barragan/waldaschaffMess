import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import { Button } from "antd";
import styles from "../../styles/dropzone.module.css";

// import "./styles.css";

function Droppi({ callback }) {
    const [photos, setPhotos] = React.useState([]);
    const maxNumber = 7;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        setPhotos(imageList);
        const imagesUrl = imageList.map(img => img.file);
        callback(imagesUrl);
        console.log(imagesUrl);
    };
    return (
        <div className="App">
            <ImageUploading
                multiple
                value={photos}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <Button className={styles.buttonStyle}
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}>

                                Click or Drop Here
            </Button>
            &nbsp;
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" width="100" className={styles.imgPrev} />
                                    <div className="image-item__btn-wrapper">
                                        <Button className={styles.btnPrev} onClick={() => onImageUpdate(index)}>Update</Button>
                                        <Button onClick={() => onImageRemove(index)}>Remove</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </ImageUploading>
        </div>
    );
}

export default Droppi;
