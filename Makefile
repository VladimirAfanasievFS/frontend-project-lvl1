install:
	npm install
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
gitlg: 
	git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%C(bold blue)<%an>%Creset' --abbrev-commit"
make lint:
	npx eslint .
removeLink:
	sudo rm /usr/bin/brain-games
	sudo rm /usr/bin/brain-even
	sudo rm /usr/bin/brain-gcd
	sudo rm /usr/bin/brain-prime
	sudo rm /usr/bin/brain-progression
	sudo rm /usr/bin/brain-calc


