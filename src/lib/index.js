export const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4NTg1ODZmMGM3MTAwMTUwZWE3NWMiLCJpYXQiOjE2MzQyMjgzMTIsImV4cCI6MTYzNTQzNzkxMn0.6WKtLFuH3GFlmDS_pvZ8CGdhQyNczQ_ipXvj9a6eQHk"
export const me = "616858586f0c7100150ea75c"
// FETCH USER PROFILES
export const fetchInfo = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      const data = response.json();
      console.log(`Here is your data`, data);
      return data;
    } else {
      console.log(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};


// FETCH USER EXPERIENCES

export const fetchUserExp = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      const data = response.json();
      console.log(`Here is your data`, data);
      return data;
    } else {
      console.log(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};

//POST

export const postUserExp = async (url, e, exp) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(exp),
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      fetchUserExp(url);
      // alert("POST was a success");
    } else {
      console.log(`Ooops we got an error while fetching response`);
      alert(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};

// FETCH SINGLE EXPERIENCE

export const fetchSinglUserExp = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      const data = response.json();
      console.log(`Here is your data`, data);
      return data;
    } else {
      console.log(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};

// PUT SINGLE EXPERIENCE

export const putSinglUserExp = async (url, e, exp) => {
  e.preventDefault(e);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(exp),
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      fetchUserExp(url)
    } else {
      console.log(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};

// DELETE SINGLE EXPERIENCE

export const deleteSingleUserExp = async (user, expId, fetchExp, setLgShow) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${user}/experiences/${expId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      fetchUserExp(url);
      console.log("Deleted successfully");
      fetchExp();
      setLgShow(false);
    } else {
      console.log(`Ooops we got an error while fetching response`);
      alert("Ooops we got an error while fetching response");
    }
  } catch (error) {
    console.error(error);
  }
};

// USER PROFILES
// FETCH
// date 
// function timeSince(date) {

//   var seconds = Math.floor((new Date() - date) / 1000);

//   var interval = seconds / 31536000;

//   if (interval > 1) {
//     return Math.floor(interval) + " years";
//   }
//   interval = seconds / 2592000;
//   if (interval > 1) {
//     return Math.floor(interval) + " months";
//   }
//   interval = seconds / 86400;
//   if (interval > 1) {
//     return Math.floor(interval) + " days";
//   }
//   interval = seconds / 3600;
//   if (interval > 1) {
//     return Math.floor(interval) + " hours";
//   }
//   interval = seconds / 60;
//   if (interval > 1) {
//     return Math.floor(interval) + " minutes";
//   }
//   return Math.floor(seconds) + " seconds";
// }
// var aDay = 24*60*60*1000;
// console.log(timeSince(new Date(Date.now()-aDay)));
// console.log(timeSince(new Date(Date.now()-aDay*2)));

// DELETE POST

export const deletePost = async (id , fetchFeed) => {
  const url = `https://striveschool-api.herokuapp.com/api/posts/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
        fetchFeed()

      console.log("Deleted successfully");

    } else {
      alert("Ooops we got an error while fetching response");
    }
  } catch (error) {
    console.error(error);
  }
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o
