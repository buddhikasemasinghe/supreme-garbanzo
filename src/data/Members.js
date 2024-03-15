const AllMembers  = () => {
    const data = [
        {
            name: "Buddhika Semasinghe",
            phone: "*****",
            gender: "male",
            location: "Australia",
            status: 'YES'
        },
        {
            name: "Lalith Ranasinghe",
            phone: "+16473098065",
            gender: "male",
            location: "Canada",
            status: 'YES'
        },
        {
            name: "Darshana Peiris",
            phone: "0763067896",
            gender: "male",
            location: "Meegalewa",
            nickName: 'Peera',
            status: 'YES'
        },
        {
            name: "Hemantha Jayasooriya",
            phone: "0728643825",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Thrushara Nevil",
            phone: "0741906141",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Chathurani Nirmala",
            phone: "0767981062",
            gender: "female",
            location: "Outside Meegalewa",
            status: 'YES'
        },
        {
            name: "Nimesha Kumuduni",
            phone: "",
            gender: "female",
            location: "Unknown",
            status: 'YES'
        },
        {
            name: "Priyanthi Mangalika",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Sujeewa Priyadarshani",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Uthpala Priyadarshani",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Duleeka Karunarathne",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Sudesh Maduranga",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Tharanga Shyamali",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Madara Amarasinghe",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Chathurika Wanninayake",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Dilrukshi Karunarathna",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        }, 
        {
            name: "Niluka Sumudu",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Lakmal Dharmarathna",
            phone: "",
            gender: "male",
            location: "Colombo",
            status: 'YES'
        },
        {
            name: "Duminda Wanninayake",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Nalaka Dasantha",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Anoma Priyadarshani",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Rasika Dissanayake",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Rasika Abeysinghe",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Niluka Kumari",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        }, 
        {
            name: "Nimal Karunarathne",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Mallika Wijewardana",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Subashini Chathurani",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Nuwan Sampath",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Amarawansa ",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Sumesha Rajapaksha",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Sisila Sampath",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Manjula",
            phone: "",
            gender: "male",
            location: "Hurigaswewa",
            status: 'YES'
        },
        {
            name: "Hindagolla",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Swanrashri",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Chamith Prasad",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Suneetha",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Chandana",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Eranda Indrajith",
            phone: "",
            gender: "male",
            location: "Kurunegala",
            status: 'YES'
        },
        {
            name: "Sameera Dinesh",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Senarath Wimal Kumara",
            phone: "",
            gender: "male",
            location: "Colombo",
            status: 'YES'
        },
        {
            name: "Nalaka Bandara",
            phone: "",
            gender: "male",
            location: "Gampaha",
            status: 'YES'
        },
        {
            name: "Dammika",
            phone: "",
            gender: "male",
            location: "Unknown",
            status: 'NO',
            notes: "Left the group"
        },
        {
            name: "Anusha Rathnamalala",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Chanaka Rathnamalala",
            phone: "",
            gender: "male",
            location: "Baharain",
            status: 'NO',
            notes: "Lives overseas"
        },
        {
            name: "Shanika Dayananda",
            phone: "",
            gender: "female",
            location: "Dubai",
            status: 'NO',
            notes: "Lives overseas"
        },
        {
            name: "Athula",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Sanjeewa Kumara",
            phone: "",
            gender: "male",
            location: "Meegalewa",
            status: 'YES'
        },
        {
            name: "Nishan Dissanayake",
            phone: "",
            gender: "male",
            location: "Malaysia",
            status: 'NO',
            notes: "Lives overseas"
        },
        {
            name: "Nilmini Pradeepika",
            phone: "",
            gender: "female",
            location: "Meegalewa",
            status: ''
        },
        {
            name: "Anoja Kumudini",
            phone: "",
            gender: "female",
            location: "",
            status: ''
        },
        {
            name: "Nisansala Prasadini",
            phone: "",
            gender: "female",
            location: "",
            status: ''
        },
        {
            name: "Ajith Kumara",
            phone: "",
            gender: "male",
            location: "Padavigama",
            status: ''
        },
    ]



    const sorted = data.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
    });

    return sorted;
}

export default AllMembers