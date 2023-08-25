import React, { useState, useEffect, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Checkbox, Col, Row } from "antd";
import styles from "../components/PresetBox.module.css";
//import type { CheckboxValueType } from "antd/es/checkbox/Group";

interface PresetBoxProps {
  PromptText?: string;
  onClose: () => void;
  onConfirm: (value: string) => void; // This callback will send the text back to BrowserBar
}

type CheckboxValueType = string | number | boolean;

const categories = ["LoRA", "Weather", "Architects", "View"];

const PresetBox: React.FC<PresetBoxProps> = ({ PromptText, onClose, onConfirm }) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, CheckboxValueType[]>>({});

  const onChange = (category: string, checkedValues: CheckboxValueType[]) => {
    setSelectedItems((prev) => ({ ...prev, [category]: checkedValues }));
  };

  useEffect(() => {
    const allItems = categories.flatMap((category) => selectedItems[category] || []);
    const text = `${PromptText},${allItems.join(", ")}`;
    console.log(text);
  }, [PromptText, selectedItems]);

  return (
    <div className={styles.Pre_set_box}>
      <h3>LoRA</h3>
      <div className={styles.Material_wrap}>
        <ScrollContainer className="scroll_container">
          <Checkbox.Group onChange={(checkedValues) => onChange("LoRA", checkedValues)}>
            <Col>
              <Checkbox value="<Junglim exterior>(1.0)">Junglim exterior</Checkbox>
            </Col>
            <Col>
              <Checkbox value="<Junglim Interior>(1.0)">Junglim Interior</Checkbox>
            </Col>
            <Col>
              <Checkbox value="<Junglim Starfield>">별마당</Checkbox>
            </Col>
            <Col>
              <Checkbox value="White Modern">White Modern</Checkbox>
            </Col>
            <Col>
              <Checkbox value="Futurism">Futurism</Checkbox>
            </Col>
          </Checkbox.Group>
        </ScrollContainer>
      </div>
      <h3>Environment</h3>
      <div className={styles.Material_wrap}>
        <ScrollContainer className={styles.scroll_container}>
          <Checkbox.Group onChange={(checkedValues) => onChange("Weather", checkedValues)}>
            <Col>
              <Checkbox value="Raining">Raining</Checkbox>
            </Col>
            <Col>
              <Checkbox value="Snowing">Snowing</Checkbox>
            </Col>
            <Col>
              <Checkbox value="Sunny">Sunny</Checkbox>
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
        <ScrollContainer className={styles.scroll_container}>
          <Checkbox.Group onChange={(checkedValues) => onChange("Architects", checkedValues)}>
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
              <Checkbox value="Ando Tadao">Ando Tadao</Checkbox>
            </Col>
            <Col>
              <Checkbox value="SANAA">SANAA</Checkbox>
            </Col>
          </Checkbox.Group>
        </ScrollContainer>
      </div>
      <h3>뷰 세팅</h3>
      <div className={styles.Material_wrap}>
        <ScrollContainer className={styles.scroll_container}>
          <Checkbox.Group onChange={(checkedValues) => onChange("View", checkedValues)}>
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
      <textarea name="" id="" value={Object.values(selectedItems).flat().join(", ")} readOnly />
      <div className={styles.Pre_set_Check_btn_wrap}>
        <button
          className={styles.Pre_set_Check_btn}
          onClick={() => {
            onConfirm(Object.values(selectedItems).flat().join(", "));
            onClose();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PresetBox;
