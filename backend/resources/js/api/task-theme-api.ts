import axios from "../../../node_modules/axios/index";

// 全てのタスクのリスト(テーマ)を取得
export async function getAllTaskThemes() {
    const response = await fetch("/api/themes");
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "タスクがありません");
    }

    return data;
}

//新しいタスクのテーマを追加する
export async function addTask(taskData) {
    const response = await axios.post("/api/tasks", {
        id: taskData.taskId,
        title: taskData.title,
        themeId: taskData.themeId,
    });
    const data = await response.data;

    // if (!response.ok) {
    //     throw new Error(data.message || "Could not create quote.");
    // }

    return data;
}

// //タスクの更新(実施済みにする)
// export async function updateDoneTask(taskData) {
//     const response = await fetch(`/api/tasks/${taskData.id}`, {
//         method: "PUT",
//         body: { isDone: !taskData.isDone },
//     });
//     const data = await response.json();

//     if (!response.ok) {
//         throw new Error(data.message || "Could not create quote.");
//     }

//     return null;
// }
