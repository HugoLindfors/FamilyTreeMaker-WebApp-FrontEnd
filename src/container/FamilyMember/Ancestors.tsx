let familyMembers: Array<FamilyMember> = [
    {
        id: 'qJZV6txF4PXNRk9sT7AmDK',
        gender: 'male',
        firstName: 'Rodolph',
        lastName: 'Knowles'
    },
    {
        id: 'DrX4MKhvmUsTBxHy9gcJZe',
        gender: 'female',
        firstName: 'Keara',
        lastName: 'Mason'
    },
    {
        id: 'ygu2Z3pmwHzWCb7Ls8hSEA',
        gender: 'male',
        firstName: 'Selby',
        lastName: 'Keys'
    },
    {
        id: 'Ac2jZyQnR9h5dKWTX6U4bC',
        gender: 'female',
        firstName: 'Kyla',
        lastName: 'Edison'
    },
    {
        id: 'edH4ay7MDPvfwCKYSxQZu6',
        gender: 'male',
        firstName: 'Dexter',
        lastName: 'Lowry'
    },
    {
        id: 'D7RkwEy8ScX9dUq5aC6heQ',
        gender: 'female',
        firstName: 'Hylda',
        lastName: 'Edison'
    },
    {
        id: 'f2NwevX95MyaGhkuV64bFq',
        gender: 'male',
        firstName: 'Evie',
        lastName: 'Spooner'
    },
    {
        id: 'emVjSsGP8y6NBKbQFfqM7t',
        gender: 'female',
        firstName: 'Bettye',
        lastName: 'Pickle'
    },
    {
        id: 'fUKgjHsx6m5auGPTXCdNn4',
        gender: 'male',
        firstName: 'Manny',
        lastName: 'Audley'
    },
    {
        id: 'gydEuNRjLmUqTDZre8bJ3f',
        gender: 'female',
        firstName: 'Daisy',
        lastName: 'Hershey'
    },
    {
        id: 'Srmfa5EGeL9c726jdJUPsC',
        gender: 'male',
        firstName: 'Dom',
        lastName: 'Brigham'
    },
    {
        id: 'eFcLw6K8TgX7AN5GWJEdtj',
        gender: 'female',
        firstName: 'Georgia',
        lastName: 'Bisset'
    },
    {
        id: 'pfH2xrmvLVQUe5wcaYTkhu',
        gender: 'male',
        firstName: 'Marvin',
        lastName: 'Mortimer'
    },
    {
        id: 'FAQXEeG8LqW5YzcjC6f4Jy',
        gender: 'female',
        firstName: 'Shannah',
        lastName: 'Eldred'
    },
    {
        id: 'C8mPxKtVEDecwS4s97BbfT',
        gender: 'male',
        firstName: 'Clifford',
        lastName: 'Toller'
    },
    {
        id: 'skwEc6TGp2fD9BRehL4tNn',
        gender: 'female',
        firstName: 'Mariel',
        lastName: 'Rye'
    },
    {
        id: 'r8Cu3mR92AQEtSBcjqhzJM',
        gender: 'male',
        firstName: 'Clayson',
        lastName: 'Peck'
    },
    {
        id: 'WmjJhKSbTxG8FnYBz7rAs3',
        gender: 'female',
        firstName: 'Karaugh',
        lastName: 'Garnet'
    },
    {
        id: 'gTC8myaVKbLkQNcDHu3x4h',
        gender: 'male',
        firstName: 'John',
        lastName: 'Doe'
    }
]

const nearestBaseFloor = (length: number, index: number ): number => Math.floor(Math.pow(2, Math.floor(Math.log(length - index) / Math.log(2))))

const Ancestors = () => {
    return (
        familyMembers.map((familyMember, index) => {

            let id = familyMember.id
            let gender = familyMember.gender
            let firstName = familyMember.firstName
            let lastName = familyMember.lastName
            let length: number = familyMembers.length

            while (nearestBaseFloor(length, index) < 16) {
                return (
                    <div className="family-member" style={{width: `${100 / nearestBaseFloor(length, index)}vw`}}>
                        <div>
                            <div>
                                {firstName} {lastName}
                            </div>
                        </div>
                    </div>
                )
            }
        })
    )
}

export default Ancestors