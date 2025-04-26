import React from "react";
import Image from "next/image";
import { CardProps } from "./type";

function Card(props: CardProps) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{props.buttonContent}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
