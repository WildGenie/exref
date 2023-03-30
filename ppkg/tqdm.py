from tqdm import tqdm
from time import sleep

# https://github.com/tqdm/tqdm#usage

for _ in tqdm(range(100)):
	sleep(0.1)

with tqdm(total=100) as pbar:
	for _ in range(10):
		sleep(0.1)
		pbar.update(10)
