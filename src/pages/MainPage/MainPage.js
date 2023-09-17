import { Title } from "../../components/title/Title";
import titles from "../../assets/title.json";
import { Phones } from "../../components/phones/Phones";
import phones from "../../assets/phones.json";
import { Gadgets } from "../../components/gadgets/Gadgets";
import gadgets from "../../assets/gadgets.json";
import style from "./mainPage.module.css";

export function MainPage() {
  return (
    <>
      <Title
        title={titles[0].title}
        text={titles[0].text}
        link={titles[0].link}
      />
      <div className={style.phones_block}>
        {phones.map((phone, index) => (
          <Phones key={index} phone={phone} />
        ))}
      </div>
      <Title
        title={titles[1].title}
        text={titles[1].text}
        link={titles[1].link}
      />
      <div className={style.gadgets_block}>
        {gadgets.map((gadget, index) => (
          <Gadgets key={index} gadget={gadget} />
        ))}
      </div>
    </>
  );
}
