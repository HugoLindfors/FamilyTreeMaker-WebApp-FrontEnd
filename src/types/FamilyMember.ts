type FamilyMember = {
  Id: string;
  Gender: "Male" | "Female" | "Unknown";
  FirstName: string;
  LastName: string;
  Spouses?: Array<string>;
}