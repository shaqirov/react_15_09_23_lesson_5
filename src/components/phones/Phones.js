import style from "./phones.module.css";
export function Phones({ phone }) {
  return (
    <div className={style.phone_card}>
      <div className={style.card_body}>
        <div className={style.title}>
          <h5>{phone.model}</h5>
          <a href={phone.link}>выбрать ></a>
        </div>
        <div>
          <img className={style.image} alt="phone" src={phone.image} />
        </div>
        <div>
          <p className={style.costKGS}>{phone.costKGS} сом</p>
          <p className={style.costUSD}>от ${phone.costUSD}</p>
        </div>
      </div>
    </div>
  );
}
