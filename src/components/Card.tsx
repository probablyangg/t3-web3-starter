import { type ReactElement } from "react";
import { Tilt } from "react-tilt";

const Card = ({
  children,
  description
}: {
  children: ReactElement
  description?: string
}) => {
  return (
    <div className="w-80">
    <Tilt
      style={{
        background: "#000",
        borderRadius: "8px"
      }}
      options={{
        scale: 1.01,
        max: 10,
        glare: true,
        "max-glare": 1,
        speed: 1000
      }}
    >
    <div
      className="flex flex-col gap-4  bg-white/10 p-4 text-white w-80 cursor-pointer"
    >
      {children}
    </div>
    </Tilt>
    {
      description &&
      <div className="bg-primary-muted rounded-md mt-1 p-2">
        {description}
      </div>
    }
    </div>
  )
}

export default Card;