
const API_URL = 'https://randomuser.me/api/?inc=gender,name,picture,id'

export const getRandomUser = async () => {
    try{
        const response = await fetch(API_URL)
        const data = await response.json()

        const user = data.results

        return user?.map(user => ({
            gender: user.gender,
            name: user.name,
            id: user.id,
            picture: user.picture.large
        }))
    }
    catch(e){
        throw new Error('Failed to fetch user')
    }
  }



//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Mademoiselle",
//         "first": "Maude",
//         "last": "Fournier"
//       },
//       "id": {
//         "name": "AVS",
//         "value": "756.2092.6592.39"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/47.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
//       }
//     }
//   ],
//   "info": {
//     "seed": "7b9b5bf6fe7d3591",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }