import style from "./gadgets.module.css";
export function Gadgets({ gadget }) {
  return (
    <div className={style.gadgets_card}>
      <div className={style.card_body}>
        <div>
          <h5>{gadget.title}</h5>
        </div>
        <div>
          <img alt="gadget" src={gadget.image} />
        </div>
        <div className={style.link}>
          <a href={"#/"}>{gadget.link}</a>
        </div>
      </div>
    </div>
  );
}
