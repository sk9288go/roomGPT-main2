"use client";
import React, { useState, useEffect, useRef } from "react";
import { Checkbox, Col, Row } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import Header from "../../components/Header";
import Link from "next/link";
import styles from "../../components/BrowserBar.module.css";
import classNames from "classnames";
import Image from "next/image";

//import { useRouter } from "next/router";

import ScrollContainer from "react-indiana-drag-scroll";

const BrowserBar = () => {
  //const router = useRouter();

  const [bar_close, setBar_close] = useState(false);

  const [drawer_1, setDrawer_1] = useState(true);
  const [drawer_2, setDrawer_2] = useState(true);
  const [drawer_3, setDrawer_3] = useState(true);

  // ==================================== PromptText ==========================================================
  const [PromptText, setPromptText] = useState<string>();

  // =================================== Pre_set =================================================================
  // Pre_set 열고 닫기
  const [Pre_set_box_wrap_open, setPre_set_box_wrap_open] = useState(false);
  // pre-set 선택한 아이템 배열
  const [items, setItems] = useState<CheckboxValueType[]>([]);
  // pre-set 선택한 아이템들 textarea 보여주기
  const [itemsText, setItemsText] = useState<string>();

  // 이펙트
  const [Impact, setImpact] = useState<CheckboxValueType[]>([]);
  const onChangeImpact = (checkedValues: CheckboxValueType[]) => {
    setImpact(checkedValues);
  };

  // 조명
  const [Lighting, setLighting] = useState<CheckboxValueType[]>([]);
  const onChangeLighting = (checkedValues: CheckboxValueType[]) => {
    setLighting(checkedValues);
  };

  // 렌더
  const [Render, setRender] = useState<CheckboxValueType[]>([]);
  const onChangeRender = (checkedValues: CheckboxValueType[]) => {
    setRender(checkedValues);
  };

  // 아티스트
  const [Artist, setArtist] = useState<CheckboxValueType[]>([]);
  const onChangeArtist = (checkedValues: CheckboxValueType[]) => {
    setArtist(checkedValues);
  };

  // 상세
  const [Details, setDetails] = useState<CheckboxValueType[]>([]);
  const onChangeDetails = (checkedValues: CheckboxValueType[]) => {
    setDetails(checkedValues);
  };

  // 뷰 세팅
  const [View, setView] = useState<CheckboxValueType[]>([]);
  const onChangeView = (checkedValues: CheckboxValueType[]) => {
    setView(checkedValues);
  };

  useEffect(() => {
    const items = [...Impact, ...Lighting, ...Render, ...Artist, ...Details, ...View];
    setItems(items);
    setItemsText(items.join());
  }, [Impact, Lighting, Render, Artist, Details, View]);
  // ============================================================================================================================

  // Prompt, Pre_set 내용 합치기
  const [PromptAndPre_set, setPromptAndPre_set] = useState<string>();

  useEffect(() => {
    const text = PromptText + "," + itemsText;
    console.log(text);
  }, [PromptText, itemsText]);
  // ===============================================================================================================

  // 이미지 받아오기
  const [imgFile, setImgFile] = useState<any>("");
  const imgRef = useRef<any>();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-2 mx-40 items-left max-w-8xl">
      <Header />
      <main className="flex flex-1 w-full px-4 mt-4 mb-8 text-center sm:mb-0">
        <div className={classNames({ [styles.BrowserBar_wrap]: true, [styles.close]: bar_close })}>
          <div className={styles.BrowserBar_box}>
            <div className={styles.BrowserBar_head}>
              <i className="xi-pen-o"></i>
              <p>Generate your Architecture!</p>
              <button
                onClick={() => {
                  setBar_close(true);
                }}
              >
                <i className="xi-arrow-left"></i>
              </button>
            </div>
            <div className={styles.content_wrap}>
              <div className={styles.content_top_wrap}>
                <div className={classNames({ [styles.drawer_wrap]: true, [styles.open]: drawer_1 })}>
                  <button
                    className={styles.drawer_btn}
                    onClick={() => {
                      setDrawer_1(!drawer_1);
                    }}
                  >
                    <i className="xi-paper-o"></i>
                    <p>Prompt</p>
                    <div className={styles.angle_icon}>
                      <i className="xi-angle-down"></i>
                    </div>
                  </button>
                  <div className={styles.drawer_content}>
                    <div className={styles.Prompt_wrap}>
                      <textarea
                        name=""
                        id=""
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
                        <div className={styles.Pre_set_box}>
                          <h3>LoRA</h3>
                          <div className={styles.Material_wrap}>
                            <ScrollContainer className="scroll-container">
                              <Checkbox.Group onChange={onChangeImpact}>
                                <Col>
                                  <Checkbox value="Junglim">Junglim</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Atmospheric">Atmospheric</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Cinematic">Cinematic</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Parametric">Parametric</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Futurism">Futurism</Checkbox>
                                </Col>
                              </Checkbox.Group>
                            </ScrollContainer>
                            <i className="xi-arrows-h"></i>
                          </div>

                          <h3>Environment</h3>
                          <div className={styles.Material_wrap}>
                            <ScrollContainer className="scroll-container">
                              <Checkbox.Group onChange={onChangeLighting}>
                                <Col>
                                  <Checkbox value="Raining">Raining</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Snowing">Snowing</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="in City">in City</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Studio Light">Studio Light</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Blue Lighting">Blue Lighting</Checkbox>
                                </Col>
                              </Checkbox.Group>
                            </ScrollContainer>
                            <i className="xi-arrows-h"></i>
                          </div>

                          <h3>Architect style</h3>
                          <div className={styles.Material_wrap}>
                            <ScrollContainer className="scroll-container">
                              <Checkbox.Group onChange={onChangeArtist}>
                                <Col>
                                  <Checkbox value="Zaha Hadid">Zaha Hadid</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="OMA">OMA</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="MVRDV">MVRDV</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Jean Nouvel">Jean Nouvel</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="SANAA">SANAA</Checkbox>
                                </Col>
                              </Checkbox.Group>
                            </ScrollContainer>
                            <i className="xi-arrows-h"></i>
                          </div>

                          <h3>상세</h3>
                          <div className={styles.Material_wrap}>
                            <ScrollContainer className="scroll-container">
                              <Checkbox.Group onChange={onChangeDetails}>
                                <Col>
                                  <Checkbox value="Detailed">Detailed</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Finely Detailed">Finely Detailed</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Highly Detailed">Highly Detailed</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Detail">Detail</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Texture">Texture</Checkbox>
                                </Col>
                              </Checkbox.Group>
                            </ScrollContainer>
                            <i className="xi-arrows-h"></i>
                          </div>

                          <h3>뷰 세팅</h3>
                          <div className={styles.Material_wrap}>
                            <ScrollContainer className="scroll-container">
                              <Checkbox.Group onChange={onChangeView}>
                                <Col>
                                  <Checkbox value="Front">Front</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Exterior">Exterior</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Interior">Interior</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Outside">Outside</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Inside">Inside</Checkbox>
                                </Col>
                                <Col>
                                  <Checkbox value="Isometric">Isometric</Checkbox>
                                </Col>
                              </Checkbox.Group>
                            </ScrollContainer>
                            <i className="xi-arrows-h"></i>
                          </div>

                          <textarea
                            name=""
                            id=""
                            value={itemsText}
                            onChange={(e) => {
                              setItemsText(e.target.value);
                            }}
                          ></textarea>

                          <div className={styles.Pre_set_Check_btn_wrap}>
                            <button
                              className={styles.Pre_set_Check_btn}
                              onClick={() => {
                                setPre_set_box_wrap_open(false);
                              }}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classNames({ [styles.drawer_wrap]: true, [styles.open]: drawer_2 })}>
                  <button
                    className={styles.drawer_btn}
                    onClick={() => {
                      setDrawer_2(!drawer_2);
                    }}
                  >
                    <i className="xi-image-o"></i>
                    <p>Image 첨부</p>
                    <i className="xi-angle-down"></i>
                  </button>
                  <div className={styles.drawer_content}>
                    <div className={styles.img_add_wrap}>
                      <form>
                        <label className={styles.ImageFile_label} htmlFor="profileImg">
                          {imgFile ? (
                            <img src={imgFile ? imgFile : ""} alt="" />
                          ) : (
                            <div className={styles.noImg}>
                              <p>
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
                    <p>Size 입력</p>
                    <i className="xi-angle-down"></i>
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
              <div className={styles.content_bottom_wrap}>
                <button className={styles.Generate_btn}>GENERATE</button>
              </div>
            </div>
          </div>

          <div className={styles.close_bar}>
            <div className={styles.close_bar_head}>
              <i className="xi-pen-o"></i>
            </div>
            <div className={styles.close_bar_body}>
              <p>Browser</p>
              <button
                onClick={() => {
                  setBar_close(false);
                }}
              >
                <i className="xi-angle-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          {/* If there's an image, display it, otherwise display placeholder text */}
          {imgFile ? <img src={imgFile} alt="Generated Image" style={{ maxWidth: "100%", maxHeight: "100%" }} /> : <span>Image Placeholder</span>}
        </div>

        <div className="carouselContainer">{/* Place your carousel component here */}</div>
      </main>
    </div>
  );
};

export default BrowserBar;
