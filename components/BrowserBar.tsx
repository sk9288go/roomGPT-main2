import React, { useState, useRef } from "react";
import styles from "../components/BrowserBar.module.css";
import classNames from "classnames";
import Presetbox from "../components/PresetBox";
import Canvas from "../components/canvas";

const BrowserBar: React.FC = () => {
  const [Pre_set_box_wrap_open, setPre_set_box_wrap_open] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const [drawer_1, setDrawer_1] = useState(false);
  const [drawer_2, setDrawer_2] = useState(false);
  const [drawer_3, setDrawer_3] = useState(false);
  const [drawer_4, setDrawer_4] = useState(false);
  const [PromptText, setPromptText] = useState<string>("");

  const togglePresetBox = () => {
    setPre_set_box_wrap_open(!Pre_set_box_wrap_open);
  };

  const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>("");
  const imgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = () => {
    if (imgRef.current?.files) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
      };
    }

    const handleConfirm = (value: string) => {
      setPromptText(value);
      togglePresetBox();
    };

    const handleCanvasScribble = (base64String: string) => {
      console.log(base64String); // You can handle the base64 string as needed
      setIsCanvasOpen(false); // Close the canvas modal after getting the scribble
    };
  };

  return (
    <div className="flex flex-col py-2 items-left ">
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />

      <div className={styles.BrowserBar_box}>
        <div className={styles.BrowserBar_head}>
          <i className="xi-pen-o"></i>
          <p>Unleash your AImagination!</p>
        </div>

        <div className={styles.content_wrap}>
          <div className={styles.content_top_wrap}>
            {/* Prompt Drawer */}
            <div className={classNames({ [styles.drawer_wrap]: true, [styles.open]: drawer_1 })}>
              <button
                className={styles.drawer_btn}
                onClick={() => {
                  setDrawer_1(!drawer_1);
                }}
              >
                <i className="xi-paper-o"></i>
                <p>Enter Prompt</p>
                <div className={styles.angle_icon}>
                  <i className="xi-angle-down"></i>
                </div>
              </button>
              <div className={styles.drawer_content}>
                <div className={styles.Prompt_wrap}>
                  <textarea
                    placeholder="Type your text here!"
                    value={PromptText}
                    onChange={(e) => {
                      setPromptText(e.target.value);
                    }}
                  ></textarea>
                  <button
                    className={styles.Pre_set_btn}
                    onClick={() => {
                      setPre_set_box_wrap_open(true);
                    }}
                  >
                    Style Pre-set
                  </button>

                  <div className={classNames({ [styles.Pre_set_box_wrap]: true, [styles.open]: Pre_set_box_wrap_open })}>
                    {Pre_set_box_wrap_open && (
                      <Presetbox
                        onClose={togglePresetBox}
                        onConfirm={(value) => {
                          setPromptText(value);
                          togglePresetBox();
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Drawer */}
            <div className={classNames({ [styles.drawer_wrap]: true, [styles.open]: drawer_2 })}>
              <button
                className={styles.drawer_btn}
                onClick={() => {
                  setDrawer_2(!drawer_2);
                }}
              >
                <i className="xi-image-o"></i>
                <p>Insert Image</p>
                <div className={styles.angle_icon}>
                  <i className="xi-angle-down"></i>
                </div>
              </button>
              <div className={styles.drawer_content}>
                <div className={styles.img_add_wrap}>
                  <form>
                    <label className={styles.ImageFile_label} htmlFor="profileImg">
                      {imgFile ? (
                        <img src={imgFile as string} alt="" />
                      ) : (
                        <div className={styles.noImg}>
                          <p>
                            {" "}
                            Click here to <br />
                            Select image!
                          </p>
                          <i className="xi-image-o"></i>
                        </div>
                      )}
                    </label>
                    <input type="file" accept="image/*" id="profileImg" onChange={saveImgFile} ref={imgRef} />
                  </form>
                </div>
              </div>
            </div>

            <div className={classNames({ [styles.drawer_wrap]: true, [styles.open]: drawer_3 })}>
              <button
                className={styles.drawer_btn}
                onClick={() => {
                  setDrawer_3(!drawer_3);
                }}
              >
                <i className="xi-tune"></i>
                <p>Add Sketch</p>
                <div className={styles.angle_icon}>
                  <i className="xi-angle-down"></i>
                </div>
              </button>
              <div className={styles.drawer_content}>
                <div className={styles.Prompt_wrap}>
                  <button className={styles.Pre_set_btn} onClick={() => setIsCanvasOpen(!isCanvasOpen)}>
                    Open Sketch Canvas
                  </button>
                  <div className={classNames({ [styles.Pre_set_box_wrap]: true, [styles.open]: isCanvasOpen })}>
                    {isCanvasOpen && (
                      <Canvas
                        onScribble={(data) => {
                          console.log("Sketch Data: ", data);
                          // handle the data as needed
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          {/* Size Drawer */}
          <div className={classNames({ [styles.drawer_wrap]: true, [styles.open]: drawer_4 })}>
            <button
              className={styles.drawer_btn}
              onClick={() => {
                setDrawer_4(!drawer_4);
              }}
            >
              <i className="xi-tune"></i>
              <p>Enter Size</p>
              <div className={styles.angle_icon}>
                <i className="xi-angle-down"></i>
              </div>
            </button>
            <div className={styles.drawer_content}>
              <ul className={styles.size_list}>
                <li>
                  <input type="radio" name="size" id="size1" />
                  <label htmlFor="size1">256 x 256</label>
                </li>
                <li>
                  <input type="radio" name="size" id="size2" />
                  <label htmlFor="size2">512 x 512</label>
                </li>
                <li>
                  <input type="radio" name="size" id="size3" />
                  <label htmlFor="size3">1024 x 1024</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content_bottom_wrap}>
        <button className={styles.Generate_btn}>GENERATE</button>
      </div>
    </div>
  );
};

export default BrowserBar;
