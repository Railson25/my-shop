import Image from "next/image";

const peopleData = [
  {
    src: "/images/people/1.png",
    name: "John Doe",
    rule: "Senior Marketing Manager",
    phone: "+000123 000 77 88",
    email: "contact@example.com",
  },
  {
    src: "/images/people/1.png",
    name: "William Smith",
    rule: "Senior Marketing Manager",
    phone: "+000123 000 77 88",
    email: "contact@example.com",
  },
  {
    src: "/images/people/1.png",
    name: "Emma Stone",
    rule: "Senior Marketing Manager",
    phone: "+000123 000 77 88",
    email: "contact@example.com",
  },
];

export const PeopleCard = () => {
  return (
    <div className="flex flex-col gap-y-7 max-md:w-full">
      {peopleData.map((people, index) => (
        <div key={index} className="flex gap-x-3 m">
          <div className="w-[65px] h-[65px] object-cover">
            <Image src={people.src} alt="Image" width={1024} height={720} />
          </div>
          <div>
            <span className="block text-[16px] font-semibold text-black">
              {people.name}
            </span>
            <p className="m-0 text-[13px] leading-[25px]">{people.rule}</p>
            <p className="m-0 text-[13px] leading-[25px]">
              Phone: {people.phone}
            </p>
            <p className="m-0 text-[13px] leading-[25px]">
              Email: {people.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
