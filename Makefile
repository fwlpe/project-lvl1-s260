install:
	npm install

startbc:
	npm run babel-node -- src/bin/brain-calc.js

tmp:
	npm run babel-node -- tmp

publish:
	npm publish

lint:
	npm run eslint .
