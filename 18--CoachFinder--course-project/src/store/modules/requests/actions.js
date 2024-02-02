export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      userMessage: payload.message,
    };

    const response = await fetch(
      `https://vue-http-2cbb7-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Faild to send request!");
      throw error;
    }

    newRequest.id = responseData.name; //firbase generated id
    newRequest.coachId = payload.coachId; //

    context.commit("addRequest", newRequest); // commit a mutation
  },
  // --- --- ---
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-http-2cbb7-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json?auth=` +
        token
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Faild to fetch requests!"
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        email: responseData[key].userEmail,
        message: responseData[key].userMessage,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};
