import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  // phone set krte hobe state a
  const [phone, setPhone] = useState({});

  // useParams diye phone gula pachi
  const { id } = useParams();

  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  return (
    <div className="flex justify-center h-[50vh]">
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
