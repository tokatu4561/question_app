import axios from "../../../node_modules/axios/index";

// 全てのタスクのリスト(テーマ)を取得
export async function getAllTaskThemes() {
    const response = await fetch("/api/themes");
    const data = await response.json();

    return data;
}

//新しいタスクのテーマを追加する
export async function addTaskTheme(themes) {
    const response = await axios.post("/api/themes", {
        id: themes.id,
        name: themes.name,
    });
    const data = await response.data;

    return data;
}
