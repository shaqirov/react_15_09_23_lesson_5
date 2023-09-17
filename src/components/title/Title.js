import style from "./title.module.css";
export function Title({ title, text, link }) {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{text}</p>
      <a className={style.link} href={"#/"}>
        {link}
      </a>
    </div>
  );
}
