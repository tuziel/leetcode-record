const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '126. 单词接龙 II';
const tepmlate = ({ input: [beginWord, endWord, wordList], output }) =>
  `输入: beginWord = ${slice64(beginWord)}
            endWord = ${slice64(endWord)}
            wordList = ${slice64(wordList)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [
      'hit',
      'cog',
      ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    ],
    output: [['hit', 'hot', 'dot', 'dog', 'cog'], ['hit', 'hot', 'lot', 'log', 'cog']],
  },
  {
    input: [
      'hit',
      'cog',
      ['hot', 'dot', 'dog', 'lot', 'log'],
    ],
    output: [],
  },
  {
    input: [
      'qa',
      'sq',
      JSON.parse('["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]'),
    ],
    output: JSON.parse(' [["qa","ca","cm","sm","sq"],["qa","ca","ci","si","sq"],["qa","ca","cr","sr","sq"],["qa","ca","co","so","sq"],["qa","ba","br","sr","sq"],["qa","ba","bi","si","sq"],["qa","ba","be","se","sq"],["qa","ra","re","se","sq"],["qa","ra","rn","sn","sq"],["qa","ra","rh","sh","sq"],["qa","ra","rb","sb","sq"],["qa","fa","fe","se","sq"],["qa","fa","fr","sr","sq"],["qa","fa","fm","sm","sq"],["qa","ya","yo","so","sq"],["qa","ya","yb","sb","sq"],["qa","ya","ye","se","sq"],["qa","ma","mt","st","sq"],["qa","ma","mb","sb","sq"],["qa","ma","me","se","sq"],["qa","ma","mo","so","sq"],["qa","ma","mn","sn","sq"],["qa","ma","mi","si","sq"],["qa","ma","mr","sr","sq"],["qa","ga","go","so","sq"],["qa","ga","ge","se","sq"],["qa","ha","ho","so","sq"],["qa","ha","hi","si","sq"],["qa","ha","he","se","sq"],["qa","na","nb","sb","sq"],["qa","na","no","so","sq"],["qa","na","ne","se","sq"],["qa","na","ni","si","sq"],["qa","la","ln","sn","sq"],["qa","la","le","se","sq"],["qa","la","lt","st","sq"],["qa","la","lo","so","sq"],["qa","la","li","si","sq"],["qa","la","lr","sr","sq"],["qa","ta","tm","sm","sq"],["qa","ta","ti","si","sq"],["qa","ta","to","so","sq"],["qa","ta","tc","sc","sq"],["qa","ta","th","sh","sq"],["qa","ta","tb","sb","sq"],["qa","pa","ph","sh","sq"],["qa","pa","po","so","sq"],["qa","pa","pb","sb","sq"],["qa","pa","pm","sm","sq"],["qa","pa","pi","si","sq"],["qa","pa","pt","st","sq"]]'),
  },
  {
    input: [
      'cet',
      'ism',
      JSON.parse('["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]'),
    ],
    output: [['cet', 'get', 'gee', 'gte', 'ate', 'ats', 'its', 'ito', 'ibo', 'ibm', 'ism'], ['cet', 'cat', 'can', 'ian', 'inn', 'ins', 'its', 'ito', 'ibo', 'ibm', 'ism'], ['cet', 'cot', 'con', 'ion', 'inn', 'ins', 'its', 'ito', 'ibo', 'ibm', 'ism']],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.have.deep.members(i.output);
    });
  }
});
