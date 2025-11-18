"use client";

import Header from "../components/Header";
import BranchCards from "../components/BranchesContent";

// Define mock data for branches (only needed for Header)
const branches = [
  { id: "motorcity", name: "Motor City Branch" },
  { id: "jumeirah", name: "Jumeirah Branch" },
  { id: "marina", name: "Dubai Marina Branch" },
  { id: "downtown", name: "Downtown Branch" },
];

export default function BranchesPage() {
  return (
    <>
      <Header branches={branches} />
      <main className="container mx-auto px-4 py-6">
        <BranchCards />
      </main>
    </>
  );
}


// "use client";

// import Header from "../components/Header";
// import BranchCards from "../components/BranchesContent";

// // Define mock data for branches
// const branches = [
//   { id: "motorcity", name: "Motor City Branch" },
//   { id: "jumeirah", name: "Jumeirah Branch" },
//   { id: "marina", name: "Dubai Marina Branch" },
//   { id: "downtown", name: "Downtown Branch" },
// ];

// // Define mock data for staff (adjust based on your actual data structure)
// const staff = [
//   { id: 1, name: "Dr. Sarah Khan", branch: "Motor City Branch", role: "Doctor" },
//   { id: 2, name: "Dr. Omar Rahman", branch: "Jumeirah Branch", role: "Doctor" },
//   { id: 3, name: "Nurse Ahmed", branch: "Marina Branch", role: "Nurse" },
//   // Add more staff as needed
// ];

// // Define mock data for patients (adjust based on your actual data structure)
// const patients = [
//   { id: 1, name: "Ahmed Ali", branch: "Motor City Branch" },
//   { id: 2, name: "Fatima Hassan", branch: "Jumeirah Branch" },
//   { id: 3, name: "Mohammed Said", branch: "Marina Branch" },
//   // Add more patients as needed
// ];

// export default function BranchesPage() {
//   return (
//     <>
//       <Header branches={branches} />
//       <main className="container mx-auto px-4 py-6">
//         <BranchCards branches={branches} staff={staff} patients={patients} />
//       </main>
//     </>
//   );
// }

// "use client";

// import Header from "../components/Header";
// import BranchCards from "../components/BranchesContent";

// export default function BranchesPage() {
//   return (
//     <>
//       <Header branches={branches} />
//       <main className="container mx-auto px-4 py-6">
//         <BranchCards branches={branches} staff={staff} patients={patients} />
//       </main>
//     </>
//   );
// }
