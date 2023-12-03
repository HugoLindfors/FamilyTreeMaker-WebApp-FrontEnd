let familyMembers: Array<FamilyMember> =
    [
        {
            Id: "qJZV6txF4PXNRk9sT7AmDK",
            Gender: "Male",
            FirstName: "Rodolph",
            LastName: "Knowles"
        },
        {
            Id: "DrX4MKhvmUsTBxHy9gcJZe",
            Gender: "Female",
            FirstName: "Keara",
            LastName: "Mason"
        },
        {
            Id: "ygu2Z3pmwHzWCb7Ls8hSEA",
            Gender: "Male",
            FirstName: "Selby",
            LastName: "Keys"
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
            Id: "D7RkwEy8ScX9dUq5aC6heQ",
            Gender: "Female",
            FirstName: "Hylda",
            LastName: "Edison"
        },
        {
            Id: "f2NwevX95MyaGhkuV64bFq",
            Gender: "Male",
            FirstName: "Evvie",
            LastName: "Spooner"
        },
        {
            Id: "emVjSsGP8y6NBKbQFfqM7t",
            Gender: "Female",
            FirstName: "Bettye",
            LastName: "Pickle"
        },
        {
            Id: "fUKgjHsx6m5auGPTXCdNn4",
            Gender: "Male",
            FirstName: "Madisyn",
            LastName: "Audley"
        },
        {
            Id: "gydEuNRjLmUqTDZre8bJ3f",
            Gender: "Female",
            FirstName: "Tuesday",
            LastName: "Hershey"
        },
        {
            Id: "Srmfa5EGeL9c726jdJUPsC",
            Gender: "Male",
            FirstName: "Dom",
            LastName: "Brigham"
        },
        {
            Id: "eFcLw6K8TgX7AN5GWJEdtj",
            Gender: "Female",
            FirstName: "Georgia",
            LastName: "Bisset"
        },
        {
            Id: "pfH2xrmvLVQUe5wcaYTkhu",
            Gender: "Male",
            FirstName: "Marvin",
            LastName: "Mortimer"
        },
        {
            Id: "FAQXEeG8LqW5YzcjC6f4Jy",
            Gender: "Female",
            FirstName: "Shannah",
            LastName: "Eldred"
        },
        {
            Id: "C8mPxKtVEDecwS4s97BbfT",
            Gender: "Male",
            FirstName: "Clifford",
            LastName: "Toller"
        },
        {
            Id: "skwEc6TGp2fD9BRehL4tNn",
            Gender: "Female",
            FirstName: "Mariel",
            LastName: "Rye"
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
        {
            Id: "gTC8myaVKbLkQNcDHu3x4h",
            Gender: "Male",
            FirstName: "John",
            LastName: "Doe"
        }
    ]

let Ancestors = () => {

    return <>
        <div className="text-center">
            {
                familyMembers.map((familyMember, index) => {

                    let powerOfTwo: number = Math.floor(Math.pow(2, Math.floor(Math.log(familyMembers.length - index) / Math.log(2))));

                    while (powerOfTwo < 16) {
                        return (
                            <span style={{
                                justifyContent: "center",
                                minHeight: "100px",
                                display: "inline-grid",
                                width: `${100 / powerOfTwo}vw`,
                            }} className={`text-center ${familyMember.Gender == "Male"
                                ? "gender-male"
                                : (familyMember.Gender == "Female"
                                    ? "gender-female"
                                    : "text-muted")}`}>
                                <span style={{
                                    marginBlock: "20px",
                                    maxWidth: "400px",
                                    width: `calc(${100 / powerOfTwo}vw - ${2 * powerOfTwo * 2}px)`,
                                    paddingBlock: "25px",
                                    borderRadius: "15px",
                                    borderWidth: "0.25rem",
                                    borderStyle: "solid",
                                    borderColor: `
                                ${familyMember.Gender == "Male"
                                            ? "gender-male"
                                            : (familyMember.Gender == "Female"
                                                ? "gender-female"
                                                : "text-muted")}`,
                                }}>
                                    <div>{familyMember.FirstName} {familyMember.LastName}</div>
                                    <div className="btn">Edit</div>
                                    <div className="btn">Delete</div>
                                </span>
                            </span>
                        )
                    }
                })
            }
        </div>
    </>
}

export default Ancestors