import { Button, Modal } from "antd";
import { useState } from "react";
import { ModalP } from "./CustomModal.element";

const CustomModal = ({ selected, selectList, setStudent, optionWord }) => {
  //   console.log(selected);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalitem, setModalItem] = useState(selected);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setStudent(modalitem);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setModalItem(selected);
  };
  const clickHandler = (item) => {
    console.log(item);
    setModalItem(item);
  };

  const ModalLine = (item) => {
    return (
      <ModalP onClick={() => clickHandler(item)} key={item.id}>
        {item.name}
      </ModalP>
    );
  };
  return (
    <>
      <Button type="default" size="large" onClick={showModal}>
        {selected.name} {optionWord}
      </Button>
      <Modal
        title={`${optionWord} 선택 : ${modalitem.name}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectList.map((item, idx) => ModalLine(item))}
      </Modal>
    </>
  );
};
export default CustomModal;
