import acne from "./categories/acne.jpg";
import cancer from "./categories/cancer.jpg";
import dentist from "./categories/dentist.jpg";
import diabates from "./categories/diabates.jpg";
import neurologist from "./categories/neurologist.jpg";
import Obstetricians from "./categories/Obstetricians.jpg";
import Sports from "./categories/Sports.jpg";

export const categories = [
  {
    id: 123,
    image: acne,
    title: "Dermatologist",
    desc: "Acne Pimple or Skin Issues",
  },
  {
    id: 124,
    image: cancer,
    title: "Oncology",
    desc: "Cancer, Tumours",
  },
  {
    id: 125,
    image: dentist,
    title: "Dentist",
    desc: "Dental Cavity, Tooth Pain, Gum Issues",
  },
  {
    id: 126,
    image: diabates,
    title: "Diabetologist",
    desc: "Diabetes, Nerve Damage",
  },
  {
    id: 127,
    image: neurologist,
    title: "Neurologist",
    desc: "Muscle Weakness, Stroke",
  },
  {
    id: 128,
    image: Obstetricians,
    title: "Obstetricians",
    desc: "Periods Doubt & Pregnancy",
  },
  {
    id: 129,
    image: Sports,
    title: "Sports Medicine",
    desc: "Shoulder Pain, Ankle Pain, Knee Pain",
  },
];

export const SUPPORTED_LANGAUGES = [
  { identifier: "Delhi", name: "Delhi" },
  { identifier: "Mumbai", name: "Mumbai" },
  { identifier: "Ahemdabad", name: "Ahemdabad" },
  { identifier: "Banglore", name: "Banglore" },
  { identifier: "Hyderabad", name: "Hyderabad" },
  { identifier: "kolkata", name: "kolkata" },
  { identifier: "Surat", name: "Surat" },
  { identifier: "Pune", name: "Pune" },
  { identifier: "Chennai", name: "Chennai" },
];

export const checkValidation = (
  name,
  age,
  phoneno,
  company,
  Complaint,
  exiperence
) => {
  if (name.length < 3) return "Enter a valid Name";
  if (age.length === 0 || Number(age) < 0 || Number(age) > 100)
    return "Enter a valid Age";
  if (phoneno.length !== 10) return "Enter a valid 10 digit Phone Number";
  if (company.length < 0) return "Please Enter company Name";
  if (Complaint.length < 0) return "Please Enter Complaint";
  if (Number(age) >= 40 && exiperence.length === 0)
    return "Enter your Previous Experience";
};

export const PeopleReviews = [
  {
    id: 123,
    name: "Abhay Sharma",
    review:
      "It is a very good app. I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 124,
    name: "Vaishali",
    review:
      "Given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb!  it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsum excepturi. ",
  },
  {
    id: 125,
    name: "Lalita",
    review:
      "I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsum excepturi. Aperiam similique ullam atque error odio ex",
  },
  {
    id: 126,
    name: "Himani",
    review:
      " it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsum excepturi.  So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 127,
    name: "Rishabh",
    review:
      "Online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor,the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 128,
    name: "Kapil",
    review:
      "Experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsuin a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 129,
    name: "Shivangi",
    review:
      "It is a very good app. I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 130,
    name: "Mohan",
    review:
      "It is a very good app. I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
];
