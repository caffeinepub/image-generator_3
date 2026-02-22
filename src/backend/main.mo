actor {
  type GenerateImageResponse = {
    imageUrl : Text;
  };

  public shared ({ caller }) func generateImage(prompt : Text) : async GenerateImageResponse {
    {
      imageUrl = "https://placehold.co/1024x1536?text=Backend+OK";
    };
  };
};
