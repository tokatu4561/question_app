import axios from "../../../node_modules/axios/index";

// 全てのタスクのリスト(テーマ)を取得
export async function getAllTaskThemes() {
    const response = await fetch("/api/themes");
    const data = await response.json();

    return data;
}

//新しいタスクのテーマを追加する
export async function addTaskTheme(themes) {
    try {
        const response = await axios.post("/api/themes", {
            id: themes.id,
            name: themes.name,
        });
        const data = await response.data;

        return data;
    } catch (error) {
        throw new Error(error || "リストを削除できませんでした");
    }
}

//タスクのテーマを削除する
export async function deleteTaskTheme(taskThemeId: string) {
    try {
        const response = await axios.delete(`/api/themes/${taskThemeId}`);
    } catch (error) {
        throw new Error(error || "リストを削除できませんでした");
    }

    return null;
}
