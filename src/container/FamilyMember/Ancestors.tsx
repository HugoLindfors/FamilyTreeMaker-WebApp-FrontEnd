let familyMembers: Array<FamilyMember> = [
    {
        Id: "gTC8myaVKbLkQNcDHu3x4h",
        Gender: "Male",
        FirstName: "John",
        LastName: "Doe"
    },
    {
        Id: "DrX4MKhvmUsTBxHy9gcJZe",
        Gender: "Female",
        FirstName: "Keara",
        LastName: "Mason"
    },
    {
        Id: "qJZV6txF4PXNRk9sT7AmDK",
        Gender: "Male",
        FirstName: "Rodolph",
        LastName: "Knowles"
    },
    {
        Id: "D7RkwEy8ScX9dUq5aC6heQ",
        Gender: "Female",
        FirstName: "Hylda",
        LastName: "Edison"
    },
    {
        Id: "Ac2jZyQnR9h5dKWTX6U4bC",
        Gender: "Female",
        FirstName: "Kyla",
        LastName: "Edison"
    },
    {
        Id: "edH4ay7MDPvfwCKYSxQZu6",
        Gender: "Male",
        FirstName: "Dexter",
        LastName: "Lowry"
    },
    {
        Id: "emVjSsGP8y6NBKbQFfqM7t",
        Gender: "Female",
        FirstName: "Bettye",
        LastName: "Pickle"
    },
    {
        Id: "gydEuNRjLmUqTDZre8bJ3f",
        Gender: "Female",
        FirstName: "Tuesday",
        LastName: "Hershey"
    },
    {
        Id: "eFcLw6K8TgX7AN5GWJEdtj",
        Gender: "Female",
        FirstName: "Georgia",
        LastName: "Bisset"
    },
    {
        Id: "ygu2Z3pmwHzWCb7Ls8hSEA",
        Gender: "Male",
        FirstName: "Selby",
        LastName: "Keys"
    },
    {
        Id: "FAQXEeG8LqW5YzcjC6f4Jy",
        Gender: "Female",
        FirstName: "Shannah",
        LastName: "Eldred"
    },
    {
        Id: "f2NwevX95MyaGhkuV64bFq",
        Gender: "Male",
        FirstName: "Evvie",
        LastName: "Spooner"
    },
    {
        Id: "fUKgjHsx6m5auGPTXCdNn4",
        Gender: "Male",
        FirstName: "Madisyn",
        LastName: "Audley"
    },
    {
        Id: "skwEc6TGp2fD9BRehL4tNn",
        Gender: "Female",
        FirstName: "Mariel",
        LastName: "Rye"
    },
    {
        Id: "Srmfa5EGeL9c726jdJUPsC",
        Gender: "Male",
        FirstName: "Dom",
        LastName: "Brigham"
    },
    {
        Id: "pfH2xrmvLVQUe5wcaYTkhu",
        Gender: "Male",
        FirstName: "Marvin",
        LastName: "Mortimer"
    },
    {
        Id: "C8mPxKtVEDecwS4s97BbfT",
        Gender: "Male",
        FirstName: "Clifford",
        LastName: "Toller"
    },
    {
        Id: "r8Cu3mR92AQEtSBcjqhzJM",
        Gender: "Male",
        FirstName: "Clayson",
        LastName: "Peck"
    },
    {
        Id: "WmjJhKSbTxG8FnYBz7rAs3",
        Gender: "Female",
        FirstName: "Karaugh",
        LastName: "Garnet"
    },
]

let Ancestors = () => {
    let numberOfFamilyMembers: number = familyMembers.length;
    let numberOfGenerations: number;

    return <>
        <div className="text-center">
            {
                familyMembers.map((familyMember, index) => {
                    return (
                        <span style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${Math.floor(Math.pow(2, Math.floor(Math.log(index + 1) / Math.log(2))))}, 1fr)`
                        }}>
                            <span className={`${familyMember.Gender == "Male"
                                ? "gender-male"
                                : (familyMember.Gender == "Female"
                                    ? "gender-female"
                                    : "text-muted")}`}>
                                {familyMember.FirstName} {familyMember.LastName}
                            </span>
                        </span>
                    )
                })
            }
        </div>
    </>
}

export default Ancestors