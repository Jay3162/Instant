import style from './products.module.css'

export default function Products() {
    return (
        <div className={style["squares-container"]}>
            <div className={style["square"]}>
                <div className={style["prod-img"]}></div>
            </div>
            <div className={style["square"]}>
                <div className={style["prod-img"]}></div>
            </div>
            <div className={style["square"]}>
                <div className={style["prod-img"]}></div>
            </div>
            <div className={style["square"]}>
                <div className={style["prod-img"]}></div>
            </div>
            <div className={style["square"]}>
                <div className={style["prod-img"]}></div>
            </div>
        </div>
    )
}