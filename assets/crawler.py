# # Enter your code here. Read input from STDIN. Print output to STDOUT

MOCK_INSTAGRAM_ACCOUNTS = {
    '1': {
        'instagram_id': '1',
        'username': 'one',
        'biography': 'foo',
        'follower_count': 1
    },
    '2': {
        'instagram_id': '2',
        'username': 'two',
        'biography': 'foo two',
        'follower_count': 0
    }
}

MOCK_INSTAGRAM_FOLLOWER_LISTS = {
    '1': ['2'],
    '2': []
}

class InstagramAccount(object):
    def __init__(self, instagram_id, username, biography, follower_count, followers = []):
        self.instagram_id = instagram_id
        self.username = username
        self.biography = biography
        self.follower_count = follower_count
        self.followers = followers  # list of InstagramAccount objects of all followers of this account

def get_instagram_account(instagram_id):
    # TODO: make real API request here
    return MOCK_INSTAGRAM_ACCOUNTS[instagram_id]

def get_instagram_account_followers(instagram_id):
    # TODO: make real API request here, paging over results using cursor
    return MOCK_INSTAGRAM_FOLLOWER_LISTS[instagram_id]

def crawl_instagram_graph(seed_instagram_id = '1'):
    # execute breadth first search of instagram follower graph
    instagram_accounts = {}
    crawl_queue = []
    crawl_queue.append(seed_instagram_id)
    while crawl_queue:
        cur_id = crawl_queue.pop(0)
        if cur_id not in instagram_accounts:
            cur_acct_data = get_instagram_account(cur_id)
            instagram_accounts[cur_id] = InstagramAccount(**cur_acct_data)
        cur_acct_follower_ids = get_instagram_account_followers(cur_id)
        for f_id in cur_acct_follower_ids:
            if f_id not in crawl_queue:
                crawl_queue.append(f_id)
            if f_id not in instagram_accounts:
                acct_data = get_instagram_account(f_id)
                # follower data for this account will be appended later
                instagram_accounts[f_id] = InstagramAccount(**acct_data)
            # followers is list of references to other account objects
            cur_acct = instagram_accounts[cur_id]
            cur_acct.followers.append(instagram_accounts[f_id])


    return instagram_accounts

def get_popular_accounts(threshold = 5000, seed_id = '1'):
    all_accounts = crawl_instagram_graph(seed_id)
    return [a for a in all_accounts.values() if a.follower_count >= threshold]

assert len(get_popular_accounts(0)) == 2
assert len(get_popular_accounts(1)) == 1
assert len(get_popular_accounts(5000)) == 0
assert len(get_popular_accounts(5000)) == 0
assert get_popular_accounts(1)[0].followers[0].username == 'two'

# TODO: verify it handles cycles properly
