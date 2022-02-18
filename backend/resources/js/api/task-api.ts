import axios from "../../../node_modules/axios/index";

// 指定したテーマ内の全てのタスクを取得
export async function getAllTasks(taskThemeId) {
    const response = await axios.get(`/api/tasks?theme=${taskThemeId}`);
    const data = await response.data;

    // if (!response.ok) {
    //     throw new Error(data.message || "タスクがありません");
    // }

    return data;
}

//タスクを追加する
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

    return null;
}

//タスクを削除する(ソフトデリート)
export async function softDeleteTask(taskId: string) {
    const response = await axios.delete(`/api/tasks/${taskId}`);
    const data = await response.data;

    // if (!response.ok) {
    //     throw new Error(data.message || "Could not create quote.");
    // }

    return null;
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
