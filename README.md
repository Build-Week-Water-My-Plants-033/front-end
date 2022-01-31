# Water My Plants 

This build week project will remind users when it's time to feed that foilage and quench your plant's thirst. 
Water My Plants is an app that helps to solve the problems concerning all your plants are consistently watered. 

With an easy to use interface for creating a plant watering schedule tailored to each individual plant, Water My Plants will remind users when it's time to feed that foliage and quench your plants' thirst.

Live at: <Insert deployed website here>
        
        
# MVP
1. <user> can sign-up/ create an account by providing a uniqure <username>, a valid mobile <phoneNumber> and a <password>. 
2. <user> can login to an authenticated session using the credentials provided at account creation/ signup. 
3. Authenticated <user> can Create, Update and Delete a <plant> object. At a minimum, each <plant> must have the following properties: 
        id: Integer
        nickname: String
        species: String
        h2oFrequency: Type determined by implementation 
        image: (optional)
4. Authenticated <user> can view a list of created <plants>. A <plant> can be deleted or selected to present <user> with a detail view where <user> can then update any property of the selected <plant>.
5. Authenticated <user> can update their phoneNumber and password. 

# Stretch
1. Authenticated user can set up push notifications to be triggered when an <h2oFrequency> of any <plant> arrives/has elasped.
2. Implement a feature that allows an authenticated user to see an appropriate suggested <h2oFrequency> based on species using the API of your choice. 
3. Authenticated <user> can upload <image>s of a <plant>. If no user <image> is provided, a placeholder <image> of a plant of the same <species> populates the view. 
        
        
