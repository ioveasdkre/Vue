// 預設 匿名匯出
export default {
    // #1 資料、畫面、方法分離
    // 畫面 = HTML
    // 資料 = DATA component.data
    // 方法 = function 物件內的其它函式

    //#region Object component [ #2 元件結構 ]
    // #2 元件結構
    // 1. 資料
    // 2. 方法、觸發器
    // 3. 生命週期（初始化）
    data: [
        // 資料
        "這是第一句話",
        "這是第二句話",
        "這是第三句話",
    ],
    //#region removeData [ 刪除資料 觸發事件 ]
    /**
     * 刪除資料 觸發事件
     * @param {int} id 參數名稱
     */
    removeData(id) {
        this.data.splice(id, 1); // splice(來源索引值, 要刪除的數量, 新增值)
        this.render();
        // console.log("removeData(id)");
        // console.log(id);
        // console.log(this);
    },
    //#endregion
    //#region render [ 渲染方法 ]
    /**
     * 渲染方法
     */
    render() {
        // const vm = this; // 指向外層物件
        // document.querySelector 抓取多個指定元素
        const list = document.querySelector(".component ul");

        let content = ""; // li 結構使用
        // 撈取 data資料
        this.data.forEach((item, i) => {
            content = `${content}<li>${item}
                                      <button type="button" class="btn" data-id="${i}">移除</button>
                                    </li>`;
        });

        // 縮寫優化
        // component.data.map 可改為 this.data.map
        // map() 會建立新的陣列, 若不想建新陣列請改用 forEach或 for-of
        // content = component.data
        //     .map(
        //         (item, i) => `<li>${item}
        //             <button type="button" class="btn" data-id="${i}">移除</button>
        //         </li>`
        //     )
        //     .join("");
        list.innerHTML = content; // 加入 html li

        const btns = document.querySelectorAll(".btn");
        // 利用 forEach 加入監聽每一個 btn設定 chlich事件
        btns.forEach((btn) =>
            btn.addEventListener("click", (e) => {
                // 利用箭頭函式指向外層物件
                // console.log(e); // 查看 e按鈕事件
                // console.log(
                //     `e.target.dataset.id ${e.target.dataset.id}`
                // ); // 查看 data-id = 陣列索引位置
                // console.log(
                //     `btn.addEventListener("click", function (e) {this ${this}`
                // ); // 指向 btn
                console.log(this); // 指向外層物件

                // #2 重點，移除項目是先移除資料，而不是直接移除 DOM
                // 如果要進行 AJAX 或更複雜行為，不會因為 DOM 與資料混合而難以運作
                this.removeData(e.target.dataset.id);
            })
        );
    },
    //#endregion
    //#region init [ 生命週期 ]
    /**
     * 生命週期
     */
    init() {
        this.render();
    },
    //#endregion
    //#endregion
};
