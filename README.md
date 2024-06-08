ReadMe:

We’re creating a mobile app to turn course selection into a social activity. Users will rank their classes and give both quantitative and qualitative metrics about each class, such as difficulty and enjoyment, and the platform will compute an overall score for the class. These scores will be used to rank classes, and users will be able to see, save, and react to courses listed under other user profiles.


Users
Account Creation: All users must create an account when they sign in. This information is stored in Firebase Authentication.
Username Storage: The login information, specifically the username, is added to the users' database.
Friends
Friend’s Page Access: Users can add new friends through the user profile page, which displays the number of friends (e.g., “# Friends”). Clicking this takes the user to a page listing all their friends.
Friend Profile Viewing: Each friend in the list can be clicked to view their profile. The profile page dynamically changes to display the selected friend's information from the database. A back button is provided to return to the original friends list page.
Search Function: Users can search through all users in the app. Clicking on a user from the search results takes you to their profile, where a "Request Friend" button is available.
Friend Requests: When a friend request is sent, the recipient receives a notification. If accepted, both users are added to each other’s friends array in the Firebase database.

Ranking
My Classes Tab: Classes ranked by the user are displayed in the "My Classes" profile tab in descending order of rank.
Class Ranking: When viewing a class, if it has been ranked, the user can see their ranking. If not, a “+” rank option is available.

Classes
Class Recommendations: Users can recommend classes to friends. Class information is pulled from a classes database.

Notifications
Types of Notifications:
Class Recommendations: When someone recommends a class to the user.
Friend Requests: When someone wants to be friends with the user.
Accepting Friend Requests: Users can accept friend requests, which adds the requester to the user’s friends array in Firebase. No rejection function is needed.
