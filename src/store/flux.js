export const getState = ({ setStore, getStore, getActions }) => {
  return {
    store: {
      client: "",
      company: "",
    },
    actions: {
      setClient: (data) => {
        setStore({ client: data });
      },
      getClient: (id) => {
        const actions = getActions();
        let url = "http://localhost::8000/api/client/" + id;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            actions.setProfile(data);
          });
      },
      setDetail: (obj) => {
        setStore({ detailService: obj });
      },
      setDetailReserve: (obj) => {
        setStore({ detailReserve: obj });
      },
    },
  };
};
