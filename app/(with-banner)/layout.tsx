import { Counter } from "./posts/Counter";

export default function layout({ children }: any) {
  return (
    <div>
      <marquee style={{ background: "white", color: "purple" }}>
        Pepitos
      </marquee>
      {children}
    </div>
  );
}
