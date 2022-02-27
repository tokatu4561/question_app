import { TaskType } from "../../types/task";
import { RestoreTaskForm } from "./RestoreTaskForm";
import { Modal } from "../UI/Modal";
import { useState } from "react";
import { Card } from "../UI/Card";

type props = TaskType & { onRestoreTask: (id: string) => void };

export const DeletedTask = (props: props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const showModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            {modalIsOpen && (
                <Modal isShow={modalIsOpen} onClose={closeModal}>
                    <RestoreTaskForm
                        id={props.id}
                        title={props.title}
                        onRestore={props.onRestoreTask}
                    />
                </Modal>
            )}
            <Card>
                <li
                    className="hover:bg-stone-300 cursor-pointer"
                    onClick={showModal}
                >
                    <div className="m-0 p-0">
                        <p className="text-left text-xl">{props.title}</p>
                    </div>
                </li>
            </Card>
        </>
    );
};
