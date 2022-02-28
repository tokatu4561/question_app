import axios from "../../../node_modules/axios/index";

// 指定したテーマ内の全てのタスクを取得
export async function getAllTasks(taskThemeId) {
    try {
        const response = await axios.get(`/api/tasks?theme=${taskThemeId}`);
        const data = await response.data;

        return data;
    } catch (error) {
        throw new Error(error || "");
    }
}

//タスクを追加する
export async function addTask(taskData) {
    try {
        const response = await axios.post("/api/tasks", {
            id: taskData.taskId,
            title: taskData.title,
            themeId: taskData.themeId,
        });
        const data = await response.data;

        return null;
    } catch (error) {
        throw new Error(error || "");
    }
}

//タスクを削除する(ソフトデリート)
export async function softDeleteTask(taskId: string) {
    try {
        const response = await axios.delete(`/api/tasks/${taskId}`);
        const data = await response.data;
        return null;
    } catch (error) {
        throw new Error(error || "");
    }
}

//　削除されているタスク(ソフトデリートされたタスク)を取得する
export async function getDeletedTasks() {
    try {
        const response = await axios.get(`/api/trash`);
        const data = await response.data;

        return data;
    } catch (error) {
        throw new Error(error || "");
    }
}

//タスクをゴミ箱から削除する(フォースデリート)
export async function forceDeleteTask() {
    try {
        const response = await axios.delete("/api/trash");
        const data = await response.data;

        return null;
    } catch (error) {
        throw new Error(error || "");
    }
}

//タスクを復元する
export async function restoreTask(id: string) {
    try {
        const response = await axios.post(`/api/tasks-restore/${id}`);
        const data = await response.data;

        return data;
    } catch (error) {
        throw new Error(error || "タスクを復元できませんでした");
    }
}
