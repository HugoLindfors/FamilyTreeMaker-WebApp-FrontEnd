let familyMembers: Array<FamilyMember> =
  [
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
      firstName: 'Evvie',
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
      firstName: 'Madisyn',
      lastName: 'Audley'
    },
    {
      id: 'gydEuNRjLmUqTDZre8bJ3f',
      gender: 'female',
      firstName: 'Tuesday',
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

const Ancestors = () => {
  return (
    familyMembers.map((familyMember, index) => {

      let id = familyMember.id
      let gender = familyMember.gender
      let firstName = familyMember.firstName
      let lastName = familyMember.lastName

      let nearestPowerOfTwo: number = Math.floor(Math.pow(2, Math.floor(Math.log(familyMembers.length - index) / Math.log(2))));

      while (nearestPowerOfTwo < 16) {
        return (
          <span
            style={{
              justifyContent: 'center',
              minHeight: '100px',
              display: 'inline-grid',
              width: `${100 / nearestPowerOfTwo}vw`,
            }}
            className={
              `text-center
              ${gender == 'male'
                ? 'gender-male'
                : (
                  gender == 'female'
                    ? 'gender-Female'
                    : 'text-muted'
                )
              }`
            }
          >
            <span style={{
              marginBlock: '20px',
              maxWidth: '400px',
              width: `calc(${100 / nearestPowerOfTwo}vw - ${2 * nearestPowerOfTwo * 2}px)`,
              paddingBlock: '25px',
              borderRadius: '15px',
              borderWidth: '0.25rem',
              borderStyle: 'solid',
              borderColor: 'lightgray'
            }}>
              <div>
                <img
                  src={`/public/imgs/portraits/${id}.jpg`}
                  alt='portrait'
                  className={`portrait ${gender}`}
                  width='90px'
                  height='98px'
                  style={{
                    margin: 0,
                    padding: 0,
                    borderRadius: '15px',
                    borderRight: `8px ${gender == 'male' ? 'blue' : (gender == 'female' ? 'hotpink' : 'lightgray')} solid`
                  }}
                />
                {firstName} {lastName}
              </div>
              <div className='btn'>✏️</div>
              <div className='btn'>🗑️</div>
            </span>
          </span>
        )
      }
    })
  )
}

export default Ancestors