import { TaskType } from "../../types/task";
import { RestoreTaskForm } from "./RestoreTaskForm";
import { Modal } from "../UI/Modal";
import { useState } from "react";

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
            <li
                className="m-4 p-4 flex justify-between items-end bg-teal-300 hover:bg-teal-100 cursor-pointer shadow rounded"
                onClick={showModal}
            >
                <div className="m-0 p-0 w-10/12">
                    <p className="text-left text-2xl text-gray-50">
                        {props.title}
                    </p>
                </div>
            </li>
        </>
    );
};
