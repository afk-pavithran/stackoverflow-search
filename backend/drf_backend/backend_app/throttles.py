from rest_framework.throttling import AnonRateThrottle, UserRateThrottle

class UserMinThrottle(UserRateThrottle):
    scope = 'user_min'

class UserDayThrottle(UserRateThrottle):
    scope = 'user_day'

class AnonMinThrottle(AnonRateThrottle):
    scope = 'anon_min'

class AnonDayThrottle(AnonRateThrottle):
    scope = 'anon_day'