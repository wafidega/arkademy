const getMonth = (callback) => {
    setTimeout(() => {
      let error = true;
      let month = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];
      if (!error) {
        callback(null, month);
      } else {
        callback(new Error("sorry data not found"), []);
      }
    }, 2000);
  };
  
  const showMonth = (error, month) => {
    if (error) {
        console.log(error);
    } else {
        console.log(month.map((nilai) => {
            return nilai
        }));
    }

  };

  getMonth(showMonth);