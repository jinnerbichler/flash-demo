import React from "react";
import styled from "styled-components";

import { seedGen, startAddresses, closeAddresses } from "../libs/flash/iota";
import Flash from "../libs/flash";
import CloseRoom from "../libs/flash/close-room.js";

export default class extends React.Component {
  state = {
    flash: {},
    seeds: {},
    total: {
      master: 50,
      slave: 50
    },
    remainder: 100
  };

  closeRoom = new CloseRoom();

  componentDidMount() {
    // Bundddles
  }

  testMultisig = async () => {
    var bundle = [{"address":"FUCKVXQR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":999,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":0,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"},{"address":"FUUUVXIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":-1000,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":1,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"UJPYKUGJDZCUJDNJKQPM99DBKMSLKMGDQETIKSBOBVZLELW9MKICBNSYXOKXQU99YDHVLBPAGOTAGF9RBAFOUYZPEDAZJLGSMZMDG99PZKIYIENHPVVXERHEUBYKOORUWFZJUYAFVYOGTFGZNB9HPITIIXAOEAHLWAUWYJLEZETQFBQFUBIGIGWNWKIODOQQCHAYPSIETPDVLRH9FHUCVSHFWQAKTBZNJOAGJEYZZLICNIJBEICCRUKFJXXOBQKIUOHQLNLENUZSB9MRDAHOI9FFCLAFHMASQELUZRZWQEHIYQH9ZVPIRPGOGUDEFVVUGQEWJSFDSIQSGIUQKIYEVQXLCLDIKJPGXSJQHMCMSVOPCYPPPDPDRUVYOUCMATOWQXUBGXUJCGEXCTRCG9LXXINIRKSPBF9YVFROKVSTVDZFIKDKGZPMISLXCBHZTGKNNWFOCBCIPWKWTEBFQIPAKTPEQZPHJLYHBCVJVDAITVVZVJAWWX9TRCTIIMGVOAKLNVOVKRARMPPLKHRH9PFVFHVYB9OYJ9HGNUUNEHEPMPYLWBZ9IHUDKU9BVSK9ICPJX9YLGIRELAPQDGHHRINSHUOHZJEUQMJVWYOLULIUYNONRTIHCHNYE9FEFERVYDIUDTGJ9MD9XCZAMOVEFWL9YTUBKMKTGDFLESEWCYCHAIATPILGCTCHDCYOI9QTBRZXPMSDUVQAFLIJTGSVUZEWVBRMYTVQLLCDXMUHFGOGENWBJDXJE9NKIQJQPEA9JFK9EXAEJFLCHCFTIBKCTIDRVGBRIAHSYWH9LJPHAEHHRWKUCEI9YET9PMAWZYSWUQRJCVVD9ITTZA9MLXUBFAM9NHAZYNMEXZM99PYKKLTFMCHZAVLUJZUBK9JJJMAEQPJKGCJGAELVKPR9NCYPKGAOHJVHZDLVNMDLKKMUEBJCQKZWCAEVIINDAGUZLYF9AVSNHBMWEGVAXHMDS9YONWCHPMSWPCB9XIBXSOIYCFHTAHZIOCQKAODKNHZRJOIJVTKHNCYIUQTIMY9AXQPIJWZHLDSYISLQBJNNODGJREHSCNOEPCVDRCKPUEPK9NCKRUXMISWHEPDQWLILY9HRUZKNE9UHJLXWGWPJHKZNWLBYQEHF9ZJRR9XJZGNBCBRGSIIJ9CPGLRCRYJFMSMDIENLBVTEPKRGICWFAALPSTSCOXIDGFUFQVKGYVUHMMBQXFLWAONYFHULQGURLCZRCZMCFRPLTNFZTBKNLWPIOKPCECZSWSESZWHZLOWNXVWBVKVWKWQQUULDUBJSTJJFBSUIPAYYMSYXUFGXYFZOALVBNXYBHWNWFJFJS9FNLBGNBVYYIVXKTKTVZTDGHTKFPTWVACVAWYOTYNCIBCWXXSCJJKJIEYQVUPMIM9AAKXD9LRVFPTGY99FSXYCUXTTNRFLDPUXKGZVXOURZHHPKEMNVBDDYWFN9GZBEKUHXLY9ULBFMXGQYTADGSO99CIWNU9TKSVAYLCLEUDDFDWKDIIVQIVZCAEITFTWIYWAQKAQQXXMJWVLDRVPYDZYQHVIOBUAZOUHOUBF9TQADMDHZWCKE9GOBOZDTRTRY9Y9JXULNCPQTMCOBIBRIVISITMCSBOGR9BMVPSJVWNRSNJJGHMUMPQUIK9CWETYYKGMY9QQXMWCFPKWRS9VMFAGITCPXDSNMJQFQADZDCJVJQ9DQHZCCHVUIIOCZMJR9T9FVGIWQAKHIGNX9BSJXHZAVXBZENWIGBTZVSDGCHQDWMIZYPWSXFSNUMLIFYPUTSVWQFGHRPFFDVZL9HPCRWGTRBAOEXZGJLGYHFCKYHIJNVYLYWSBPCK9LLWRDNLVBOPWDABAZXYGKALDBGSMAFRZ9TZMLGIHGTXMOQEZ9ZKREXHUDZUTNIRVOGHDNGCRDGDOUGBEYCHTVTL9QKVZNXUWYIRFLJIZJSUMNYVXQVCXSNWSMODSZVNILBLZOAN9YRWRJWSLYMYFJDWJUKGMETSIQSJFIRXQR9YAGZSTOBTZAGB9DDJFEO9KQRKBHVZYOAAKTPBLMNNWTQTCERGMQVHZGJZT9KKTNIHFVPDYVBHGVVOSM9PCSTKXQPOQPB9LRJIQDMFZVDWWCRXIYZSWSEEHGB9QKEOGQHDRPZHRGZYSMEJCLHRV9KOBAQYPYDJRXKNSKDGWRHMZRL9KMPNSANDBC","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"},{"address":"FUUUVXIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":0,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":2,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"ZDVHZKRJSJBPCEKPIAKNYQOATLPJOPXY9TPWFTXSLAMKEXBACXMQPFBAZPIE9WGHOYIGSDGGCMDOJKGTAVCBHPTLZ9RBMETKMQHXEFNNZMPNAUZGEVPXKOTIBSNRICOMNQAJBGTKZ9GDQTZKLMMUPOLKU9LNRVJQG9KXOD9HQBAGYXMXOWHYVXCKKGMVFHOWLYIXCQMJ9DNZHGBN9PG9VAYGLUXSYJXOZVVNIXXSDSWMESTDQPDJXYADSWJQFMJDDTSRZVQCAIQJBHQXKKTUDRAXAVFZNB9WRFXUMFXFZDTCZHORL9OAQACWULCJUTUOXIVWSXPTYKVOEKRDYEECDBJOHNPNMGJXI9VBEWIGMEHHWDPONOKJNGMCVMLXKA99IFJETCVLTTHWFCOUHJWVATMJPUBZOGQIVUBYTMXTS9GCXTHVFTZQECNIJFAKTSVVVZXWRXFEFMAUHMGRYNXMVGKSPU9JEWOLPXIBTDLPSKPLVCPOEHCZTQBYPRWKLEYCLMIXLDDQZVHVQTA9BEFDKRJTJCUJQVIKLHXUWHGGHLZBVHATPNFLCSX9SBNNHDLKOBFGAOXMZYPLDEHHYRNZUPLDRMOSQFKUGKQBACIHZLQXMBWWLXAWZRJDXDI9VXDYALGLZRKDQFYYPGOYKSACNMSTQNWLU9ZCYTWYOWWGWHX9NUUHNDWHTUCKIUIMMUPPSGWDF9MNQNMRJGMUJNHXHZIPBBTDVQJPLH9TCPLULML9CKTYJRJF9HBLJQQOFGODDH9REQZCVSDLAPPETRIXCSHWFQPBASIWGQIHHEQCVCBDHQLUOFWRHLCLENADC9DCIBNVFIWEK9PZMUWNGPKMQZXIACXVLVLYZUICERXGEJKKMXLCTBARRECPRPBHVEQBUDNUPVM9OMLQIBVNAAUJCJNQUBMOKFARNBBV9NCYIGAHFNAXUN9XLRPAKAMPBWSRNPFZRTESWOWZBVNRAGC9QMTEXKCYWRDMLJKCDPVMFVDMGOSGWFXFTDQPMKPHPVIDHWWMGPLUJRDQLBCLREMYVW9DXWKNDJAHGPUPZTWPVUZ9NLRCUWVCNEWYZQAIUTRHKVUATEW9ZPVQNVHVNDCDECWRRFGWYGKZBVVE9TULILPI9YP9TQ9PEZVHLEOANYRIHAWSHZEOWONJZ9EQF9YOKNNYNDEEPIAXXSOBWRVQPMHMRDLDEQINQOJOL9JTFJZTRXGMTAJAIVHKOPAGU9ICL9CPTYNJOVQOJZTZIOSWQEWIOFMSQ9ZJHSHERQBYRFOORWEGWMHNHHEWPGVZNRNFWQUBUCJPEHSWPWUQB9CZIFHSXAMRRBIFXSPYDSLWKLYPVMRAPEM9HZPH9KXEVIFKPHIQYPRZSVO9ZMKAHIANUKNOJXYGNFJWNUAEBJUMTCHEDCHDSIABIGYJC9IEBEDFFDFQTO9XDBFYQBEKABSQCWDOTWPUWDZKHGVAUKJM9OVECYIIOXOYFFYG9IXFVUODFFOURWVGEBYZIHHGFORXNRU9CUPSQYCUAJWUUBOUSGRITYCNEMHSPJGPEMSPIIDPGBQBVHQTMZOONBLIXOSXHXAOOELQLAGCAVRZKUWAUWIPLVAMTBLXNFEXNBKKHDKAMCKWMXBXOPDLHUDKKNCBIMAPGPULVWQGCR9BDCZEELEXRZO9VHKCYSHQXLWAZAVZARJMEPLUHMBKSAHTCFNISWGECGDFNWQHUJNEFWZNUPKOVPJEIYVSMCXQTZCBAQQBQDOESDMMMY9NVGYQKGVELNSGMYPCIAA9QDQCTNTOFEEV9CDJBYJDTHZNYLGZDDHXOGI9UBNKZAORZLGMHBEBKMURPAKUYNYQRGZEOH9CUDGZDASVT9ZGVYXY9PNFGNOMDVZ9BKCEHVMUSRNWOKBOFJG9XZMYQQZFYJOADC9WCOSQVXHNKKMXQHAWOLPYSMUSOJRWMUDAUOEZRKBDLFUIBELAAXOONUOIBYZCMHTFCRTRGUQNOSNXEUABYENHMJSEIKUYBKFFYXTZHDHUSXBBYSHBFCWWIXUINFHGTKYGKCNCYXHKSIOXKMTWQHCD9JNQCSGSZEYTSIVYOTKYG9FOQCZJRPTOG9VDKIHA9WFLNFSTLEXJS9APWXSPSBTGN9DA9URNDVEVOQGFMDGHEIO9CNAXXHEXEAHAW9IMQJIVVUIJQYBRHVFPNMC","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"},{"address":"FUUUVXIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":0,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":3,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"ZEPXPFLHXUAIJRFPUFFEOVBEJBEGXLGRIVPLHSOZSMYAJZXBCPPBOLE9BFUORJNDIGIFCLVTHSFPTTGPXVSZWULMDCWYPJZWQCBQAFM9YSQKPEREXGUYAEZGOISKJPJXCTTEJNEZGNUQBGPDXDFVXOWGTUFCHFCHXDWLIL9PVAISSWTAUJCZCBWWJAXAZNDTNGWOTXCYWWSLWSVM9YFRFYJWJTHFQLGVPXLCY9OYIXXVDUKNDZC9XUEFGJGHCZVKAXGJVHWPUAQXUY9YKOIYVAGQOZE9RRPDJATOKKMRHXMJ9ZFZGRDSLTDIGPGB9BGMXNAXGTJHPHXPHZNUPMJLVPMVKJAWI9UFCQJDLIRMDHQDQVNIGKXJETWCJNLVKXIEUHS9YAVRCHLVBXOSNDWZBJFXXIDRHHEYZLUEPNTBAILINGGXWLUGOCKHIQUGPPNYJYDBEJZVRIYAJNEJN9NAHFGDOOHFJLLNAVIJLWZNWVIXBYNNCWTJNBPRRARYIG9CCFPLVMRVHGWHCNAVZJDJFGSAWYRGIUEETTMOJZOHNWBNVMM9DGPLCRXWCWKWUGZGYEYRATSNETBYLDODPLDZOZEFMHAIKLWFLKVV9VZUQRXOAMDVSPPCWDQSYRYREMKOECBF9YRYLZGIOTZHWKB9ZOWGORBXM9ZJKPM9SIJBIJMCCEDGSK9TNWZVCI9GIKFU9PBMLEKRWRBTCEIMRHGLSEZT9PXDWHI9OKPKDQVYMJKBETFFCSFMHALHXRENXMPNLKENFVJNXFVXO9OGGFCORMBZXIVATCTXJPIZNDHIXZUQWMXMAGIIRNSIFLOITFDTZBMW9UJNIINTC9DZQPEDFLFKRCL9KSJOKOZXWMMLIKRHUMLRDXAZCFQSHEXJGHVRUIOSZAYVHTMGZMOMHGAGRCQGUKGR9TRGYXVSUWAKSGDWQWLOHAMQUGSMYHNQTDKTNOSZGX9LOTWYVCYSKNVHOMOCEDIMZGUFXMHPDWSWYZQBVPKGWPXWJPXFDKYNFVVVAP9EXIUKDHGAZQJEGAEL9XCEKY9HCTSZDLXDGVPC9IPAKIBRJGPRVNWWXKEPXVBPXUGWQQWZJXDNVXKHYRTG9YH9LFZHDUERSYCUMF9OHXOZUWYEHCBEEHXJ9QJOOCDSFACBPGJTSMYPUZBAL9RYBGLVMSSCQQZIWPLRYWZBSGZLMOKEXCRNOGJMGSBROOYSALTMXVSSHINVWXLMZQKRIEEUPVGIFOGLITAGZYHWWYQIPNQNRBFKBJVATT9AGIJ9OIVTEHJ9KQTEFMPWJXLWSZEUWBWWSXTEDDLAHXHOVDLUOBBZTGG9AX9RMFRCMIQSAEWUMRGNYYZRMBTBRNSZGPDNCIUKUSMOXSDKWKMMRXYYCNMLGNVTGWMIFTGTSUOJTOUA9RFRSNFLVGFBPPUCUCCKJYGDAZXRIIXVLSECAYMVONLCQCPXVYEXSOEHC9VXKJCP9LQWRYRXYQIN9ROXEFMBNGFQDKXGSOEVQOWCFXPDQKKBHBEKXKQKQGUHZMOLOEDX9JAQO9MBBTARNTBMPHXKZBGDALLGYPRHNOOWTDAJNWNQGVNLOFIYCDPBGXEOIDSQVUEOLAEPISVPPSOWRAWTPMMEAWRDT9REPMUDGQPRXUKW9ZGWFTKAJJXJATNECOUOUKBHGKRLASJSRRJYSMQXOEERA9MSREPYBLYGUBTBKUCQUCIGXNOSJJZDCVRKQPQKFQPEEXZPAYWBZLEXXBVQGADNAJCFLAVEPBSCLVRISMSGIMLX9YPPIFECGPXXCFUU9RUM9YIVJRQDMZTKNNREIC9KRMRWIYHYNMTVHISYIXCFUZMPTDPCMFPGKGQMBVSKCJXBZODTAMDDPISLVIIXILVYHHOPYOJLADYYPCOWCCEXUXFUUPHDADCHUKDUFWDWYQEEBULBQTBHENLIMXJYCWNQBCKMCRCSWJGEQ9PACEDIHNQZSTVREVJMFHFVKKFPOBYXLQKHPWKLRWLVTJHRURZQNSNFLK9ZJTZFAGPDPEQVKYGPCSKXGLCBCBVIEVERBGMJXZOTNARZYXQHIPCVSPC9HIRLJ9HKYNEFL9QSFKBASVYWGYTCICDQGSMARDEMQDRTRGZRYDXNYKHXBTSYIAUEIYVCCVVDQGPEKMFWLBSDTNHIXRJTXSW9TGWZBYYOXONANAB","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"},{"address":"FUUUVXIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":0,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":4,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"WTWTEEONHFJWHCJOMUBPXSUYC9H9XLSRDZTOPQLYGTLDMVLESBUMFJHSUOPLOFZW9CHMHIEOYPANWHVGAQXLKBXZTFDKUCC9CYIWRYWTCMECKYOVSUNO9LDRNOVINZBXUPTUJLYLEAW9UQLBWYTHMRANY9GHWDJRKCECFLGKY9IYDJXSCKMECCNEORPLRKZATRKHQUMXQE9CAHQNUQDYP9ERHVP9APVOUOGPRFHENYIQKEASHIDJDCMKMDSCTJWVIMGYAUVMQQTMMOBBABNDYPKCQSYSOJGUSAOOFYVSNZEAFGIWYIBIOKAPMNPTSHUQOLHYBC9IHTBZGREAZKDOUPAODYJG9JOLIQXRBJO9ORVQXTFNTRIOYJJASVWFMGSMLGEIKBSYZZGNAAOAUDOCBNDKWCXDIUPIMDZXRZVMS9UHAPQNKSXGUICKYYW9NHKQPUHHIDAYDZSWDKE9XVWTXNSB9MFSKUSMKBHIBW9DUGGJI9PBPEX99TX9JSHGWGEWFAZSQJTZRCHMCEMOQJX9LOCYHPUWVNFUIOWZELBTLB9HOQBCYVWQRW9YKELZEJTGOLCGLG9ANKLMEHAPHXDGQAMNNZ9YBNYVDVZNZVTTZWTDEMYKWPTCUIBQYNZGZ9KSOLTYCANXRMCJFZSBHIRAYKRHUTVNRXYYSZVWXUYLSLDVIRJLGKWADRAEUZEIZLVKKYWNOPFJPODAUHHDRHXSIRMSYPXKOYGQXRUNZADQPQ9WGCVQCSBEXAETDUGKMBVRSBVKHTBRSPTGEILZQONP9USIKCUJTQVHH9HAVIJJACLDKUC9ZZBXANFZCTUJVLVYAXEEHSXXQNBAXHDEDBAFRL9VBDHAHR9BJQKMOFIIKVCZRBCOKLLTFANZPEBHFICLK9W9JGGJVLLSHDPYEOSRODIHNYBVYENNCEGJHYHWOPHIKCKIUOJUWA9CVXHSASPVJHKURKRUMPMWSOUXONHRDEDJDSSHKIEWOOXZXRBPMAPXWYBUTIFXIBZBBARGHJNRKAAYVIRTZGSUDYFQPZ9AXPIXNI9PDV9UNLYWEXW9NAONHRWWNZMZYEBWXDHPLZPZ9WJLKXGMASDMXGAAWP9W9W9EZLGEOKWGPRIYUAKTNFLBU9JLKMPLOMMCUICCJRGJSDOIHOTRCAO9RW99Q9DVCKGURRCKDBIUTQJSCUBBMBGDES9GVRGFJCCDMEKZNCZAA9GACEOXCXERU9WIRFWHDSUQPJILKSXAXSLAVSOBFKXHXWZCHPKZURKLKNFSAPKDM9NVASUECXALS9BDEYAGGLLIIJHHZDMIBNXFYXPCEQ9ENJEZYSZY9YDMYYIDQYZZCBGEMMXKSSXXEQEVPOQSXIRUDBJTQDCJWRPFGKRSZWZCICCCOTUUJDTZYLJZICRLWLGQJMJSIJTPTO9LFVPIXXYTCSEFQQQRPJOVEMTNKVTCJJMROWKNRXSAZNTRDJRALNANCHUWDIZFQVHDKMQGQSKICJIEIXVYPVZVUWVTDAGVOAQOPJMCXMJZHVTOJHKEOAXCNTD9TJOPFWODRCJJHVNFSFGKQOZCAGMCDMUKNKIVFLZORDUCEKUFIOLBOTLDSKXKTHYQGSNLUDEYTLXYRGAEUHKBLQUCOT9VKOUZIH9RAXTTZDHKPHPXYPLYKHKRJALETYQOQPNV9CUNRDVHFXF9ZESEUBBXKPUMYK9GEAYZADDNNYKOSSHMSQ9GDMJEEA9SCM9AHTTCIBJKDIS9EPFYWWBGQOEKDNGNBWYOEGJWVAHIUFPZSC9IPAFKUUCIRGVCQMSBNUQHUYOETZDCPXMEASRWYMDXOIRXFGKPDCBTAMZJYAXNEGXKLNJJZENSCWGNUTYRHAFXQRRB9NWQBOAXVVSSKEVUXQUONMELAKLKI9CDCXZREJJCDPUUTVJUIVRUEXEKEYQ9S9YCZPUJKZDXFX9GACYWXGOCQHVAJRSWCEHAPRSNYOHLTGOSBWKURYKBKAWRKSPRTZ9MRYHIQNDGICUFUKBFEEKYXOHIAJE9YJLSYVGLIBNMBZWEE9TRCRTGTDFWXIOJXYFLWYPYLPODKAFGEBM9TQQYTUVUHRUBXQURVAQCCXIBJDMHENQDNED9LKHZTTCKNTMKTOQHURK9JVNHLFYGZBD9NNCOVSBOSRDWTH9QVWQBRN9KQLYOUNCVMXPNACW","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"},{"address":"FUUUVXIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":0,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":5,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"NTARZFQAETUHASOEBNSML9ADAIFTKUFYMCIGNN9SINGCCRJKCSIFVKJDYTQIKMG9HLGDEOCVIRJERMJHDENNXMVUPQEVLBABJMFHBZWL9XVSXWTVYCFFRYYAQWDTDIMKGPWUZZCOILZECWXVLREXJGMADEGSZPG9ABMWSBSRMMALMVFNLQJSRWF9YLIHU9ULUOJQQZXCMRSVZOJDPXUI9QRUCSWAHLXGTJXJCYWLQHTONJL9LKDMEFMTFKMKNSIBVKOV9GBOSOGLOTUEXTFHHWP99RSJWT99JJPTEJRLEQYLGBRCMFDXYMZAPYOBZUHMFWRZGFWIRXKTTDMVIRRZJEFDPWQTLGESYUJUJJOY9CLVZPXW9WDUVMGOSUMMCVHQQQWQBXHZYLXXYD9CRIJQ9QBHCLINMOQQBERYMEPI9IGICODQDGHM9EY9RFOOLRUJFCUAIQCV9RZTOJC9GTXJMMWKSCNVQAHJGIFMXAOEDGVBAOKCMLLQUG9YLHREKXSV9EJLOQOPELIXHYFOGPPNPYGKDNFODJTJRQDAFRVBZIQLXRDDNVUTRHWQXUHJVDCFJUNMQI9JRPMACYSLUFONUWLAVNOLPNY9IDADFQMETKTSIEWTXHDJRUILU9PNIMQKKDUO9HICXYDIRAEDUANCE9IWMMDKLCVMXQREXVJKHZQPRRMEBMYLAHJOTTKNXK9RUZCLWRUMBQCIFXNKQMMWAADMAEHENC9MJYKUTG9PSWOGDNXAUODE9CXNVYCDFEHKPO9FFOMVOED9O9DZOUKMMS9DJEE9IQSAHOSUHAQNKDIWANRU9XADODOWJYSBTAHBMPQFGJXSTXBWTNPSOOU9ZVG9DRXUBZITLJMPDIRHWHBW99WJKVF9ZK9TNVAA9NHG9BQOWZSXSBEEKELAYFOQNHKOAOPZSIUWSTREQTEEBGVMBSFALBHUAOWLQZHJHYPRAVWYNGESNLDCOR9MLCACDDHRMYFMB9DMYAMKOVXZUMBUOUIHNCYUERHXOSQRMTMMCYKFPAJCFBTTEDQANHNIKJTPRNYICGHDLDMYQFWMMFJVLFAJEPZGBUDYELSIXTRTWSGEIJYPAOXADXCRMLLBNOOPPQDAMUKJVJUUAFFHAY9NGWJACDJCVLNWQHFBAWPXOJ9BGUCWUTBJCJHDM9ECMJLZEKXXVJIIRWRDWMJGDASCMAFPXYAKGLUNQWRGVFDZZGRUKDEZEUCFDAHQDVZOHHBKGIMZSP9PPOTJYHDZNVGJCIYJVUXMEWANQZGUKDNNJJFJHAU9IIXERY9CZCLILGFUDDIRGFJPAZEKEKYZLWKEMGNDMKUAKAWCETAPMUUWLDXKWXSDMKUVPTDXIUGQTGVLALFTRNBNAAMAHSWDBNJRODAPCGZLLCLPDHOFENJRAIFBCAQBSIUYOMURWQAWNJ9RRQRCUUSONXNZKUNZYZCXI9INLXFIPCDHSXSBUEKZACSPKOGZNYDWCTDHFEFDHSFTC9IZSQECVRBDBYHRIWQVJEKMYHCCSZMZDXSJGZBDISZYCYQTPXXZXKRCIGYUQTJFECVIGXVIACEYQRJLBV9APRKRDXCTTZLYANJYH9HXBORVYISFKIZLFZPO999WIT9BKDQVJN9ODAMYWXKBEQXDHYOPAUSGEMNBRELBQKZMREVBQMELXEATRHEIWXJZ9QKKS9FCNURUFNMMAJ9ENBMKWTGTZOUSZKDFGZTLKVQJXIIWCXYWCYTDUHQYBWUDTWKMUYLJKUNSUDIY9AMIUGXCNIF9LYYCPXKILUBKBEILQFARYRPHYDLDODOVMBBGBUQDBPKDOVSKUYNKSLPPQIIER9OPVDPRPHZUERXZAS9EEA9AIYDVBSJBHQIKPEKTULDRUSSEEIFWLRCMUZ9JCUAUNHKYLJJVMTJANNKSGCZJJLGQVGOVI9HHEPCWTMPXAZQXCLDPVTHDKUZKZYGNESPQKRRMCVTXBRNOWAWE9WLPXMGKBTFNZVCDRKHKOZVJGORNCDYTFWSFDSLVXHAZWWSOBSKBJSVYCPIESFKODNVRBDLHWDDMPC9HKQMFQKDWCVTHTUX9BJZFUUHFITVEURBTTCZKILSZJYNJTWPPLCXFGO9YEWS9DB9MSTZGDOISTPQQK9ID9HXBFD9MOVGCJNZZG9UQPLXEOVFXEIKFP9GLS9YWLNNBVHD","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"},{"address":"FUUUVXIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":0,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":6,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"KWIXULBMRXKNINLTFWLXRXD9AJRPBSRWW9AUSOCWDJAJMIGGAICEMRQTSEIZELIPGECJTBLJULAGNAZC9NEYCZPXSZUYDJBHFO9GETILPAFT9UMQLJLKWWPVJZMRESKMAMFGLIEFTQTVS9EFFIKUMFFDYCKSVUQEFDENBXSULIHECXNODLOOH9LBNSGXZJENLQKSTINTGU9ZMHF9EK9XDLLGXRNWABRINZLKEJAFPFGDGPRZPRWIRQSRAWNRMVCVEALSBPUEDJCUYQNEMCJOZFHKIERHGNOHMGDGXLMQJTIKXXUUPIGGBYPRFJRMYGY9DVIDB9UEAQVMTNKRXTRXPKPOXJFL9HTCZ9FN9FRGNIBDSWJVDXNFMJSUIYHISAORGCCYEBIGNBMYTE9IBWKPXJHW9ONMJTS9MXVYDDPRJLBSKS9TBNO9DVZTWXSQ9GISXEZMVXAZQP9DIKJRCHMOJCZZFHQKWISGMQYTYXFFDWEKN9ANC9TESNLFWYPAIZLBNYISHBGTCPZBKHMXW9RRAJROIH9TDKLBTFNSUKMYRWIQRAILJOG9GICDBWJJDHEICLFFYXHETLCGTKDDOGUETASQGADDAGK9OQRBKVFXYIAWDDZIFEKWF9XDEWATQUXAGKZEPKJZSMHJGWSOIIUT9HFQYXGZOOHVODZHQUMYRCKWXOCPQNDCKNW9HYYLSOTPXSOLQXDAFYSQO99RHLVCVDSRXZLRJEXMQNCAGNVRUYMDTTKMUQCWDZBEEWGNQLAUOFBWAJ9YRHNECNTPVCRDXLAIBFSMQCDKAKUDWSOUS9WBHULEMW9EGESSYFXJPCQUGVJMFSVNVDWGBTQLV9RHAFUAETUINZXWHRBHSWSHIRJHXWNBXXTXLGLFGKYFUZLMHZAVCMCFHOCGZTOWGJKCNDONMMMGXYVFVHEJWQSMTKBMTPAEAU9CIKPHKWH9M9FVGQOGHQGDWKNALLHKBLJOXESGPAJSMKEVBVGGDIAKUSGVCJGNUASYRYHLXSCYGWEGLZEZFUJRPIEZBVNINHHSBXVBBBMRXLQPE9PWYFEVDWYPKLSVEEWRGOF9UEGYOOQGMU9SZSICONZMBEESHWVQHYMMRUYVDIELKGOI9OKIWRFXACTKOIYNLHVW9EVUFTYRBSQ9GPHKNKFOEBLSFWEBQYYWO9YYTOVMDEYPGTXKODUAMGNDSPHXBVZHEGZHDWYWCANTYQYJBVJUHKKHIINKJS9IUNPCYN9LIOUQIFQBRWGQPWHX9XEDOBQKATMYMQMZAGHHTEIQVWRQZFRXWAF9WXXNYIBBESEWVRKVILFZXREFQFBFKVCGKVAQWXVQGFMGQAHAUSPEGFRLNMSFW9BPLNFYZQUCKOBKZ99LOHUHLOPRCXPXENPDLZ9NBJF9WGANWKDLGNFYPHJBNFOZFVOBKIXNBUBIOZCFJBFDDKCDDHBEDLAFGXAXIIOUSBUSWLGLG9SEGAUHKJMHHORYPMBPKLLFKYHJFS9IBVBNKYDKTGQCZJLGIBKUVZVWEKGVZFBNMDYJGZJSQCXDWDTDSHIHGBLQXMWTTZISWIKTVSHHBHSWVBQDAQYIUAQ9TEBTINPRYCTYCQMKLPXSRIDRIPCDNZDYNXQIPXSCXJCXDQCTADJOELWUBFNGKJDMZRMZGMOAGUDFRRXRAJBDXDESWLGM9KXBDXVLVNVSAOGIDTHAVKUNYRSBPLB9OKMEGW9ZBGSVNUYQAFFGGJXDIJXLJN9VZUK9W9RSAU9IPRSJYENZCDIEIMKHZSMXYWXRBHCEUWEDYBYFFZKJBBYJZWTHFTEQCJTMGAKAUJJL9EOLUHGYTUMLUVVL9XRDAQXKYRZAPEFAEVJBUSASBYLSJTGFBEESEYKSWFSPOFTNNGMUGIPAKSVGUGAB9ZHKXOGAKNWDYBCAIOBFVDVXNR9FUKGBJTTHZEXCSJUAFMATFZYTSDBAPQATCPUMLEGESPA9ZQRXPGFZXZIDTDXURIZKTRG9RUHADZSHUBVZCNVUWKFBLJJBDIZ9JUZBDIMQPUQUMAGMLU9MEOBSYDYZSJZGFYICNVVVDCPWSHINHJWMGYLEDLA9SSEEUOQJFY9OQOXDXXLOWESSIDCDFRJRIAGWUPRKXHMHGFDZVNBWZYRCEUXPBURHQFPLRFUONRAQXGRTSEBJ9PFN9JXZHDFM9W9","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"},{"address":"BOOBVEIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX","value":1,"tag":"999999999999999999999999999","timestamp":1502550326,"currentIndex":7,"lastIndex":7,"bundle":"AY9RCWULOCGA9XSJXCYAANKEKLIUTZRGDZNIVKKWHAJKCIZOZWVCSXBHEVNCLWSIFXLOPAAYRFVCAPQID","signatureMessageFragment":"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999","trunkTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","branchTransaction":"999999999999999999999999999999999999999999999999999999999999999999999999999999999","nonce":"999999999999999999999999999999999999999999999999999999999999999999999999999999999"}]
    console.log([bundle]);
    var newB = await this.closeRoom.attachAndPOWClosedBundle([bundle])
    console.log('attachAndPOWClosedBundle', newB);
    console.log(
      "attachAndPOWClosedBundle > validateSignatures",
      iota.utils.validateSignatures(newB[0], "FUUUVXIR9GDQMWXBYVZW9FYVQJWXLCXXCYJHOYRVW9NKBNZEVYITXXSRFANMIUNOSVEGUMETUZC9EAPOX")
    );
    return
    // First co-signer uses index 0 and security level 3
    var digestOne = iota.multisig.getDigest("ABCDFG", 0, 3);

    // Second cosigner also uses index 0 and security level 3 for the private key
    var digestTwo = iota.multisig.getDigest("FDSAG", 0, 3);

    // Multisig address constructor
    var Address = iota.multisig.address;

    // Initiate the multisig address generation
    var address = new Address()
      // Absorb the first cosigners key digest
      .absorb(digestOne)
      // Absorb the second cosigners key digest
      .absorb(digestTwo)
      //and finally we finalize the address itself
      .finalize();

    console.log("MULTISIG ADDRESS: ", address);

    // Simple validation if the multisig was created correctly
    // Can be called by each cosigner independently
    var isValid = iota.multisig.validateAddress(address, [
      digestOne,
      digestTwo
    ]);

    console.log("IS VALID MULTISIG ADDRESS:", isValid);

    //  SIGNING EXAMPLE
    //
    //  Even though these functions are c alled subsequently, the addSignature functions have to be called by each
    //  cosigner independently. With the previous signer sharing the output (bundle with the transaction objects)
    //
    //  When it comes to defining the remainder address, you have to generate that address before making a transfer
    //  Important to know here is the total sum of the security levels used by the cosigners.
    var multisigTransfer = [
      {
        address:
          "ZGHXPZYDKXPEOSQTAQOIXEEI9K9YKFKCWKYYTYAUWXK9QZAVMJXWAIZABOXHHNNBJIEBEUQR",
        value: 999
      }
    ];
    // Define remainder address
    var remainderAddress =
      "NZRALDYNVGJWUVLKDWFKJVNYLWQGCWYCURJIIZRLJIKSAIVZSGEYKTZRDBGJLOA9AWYJQB9IPWRAKUC9F";

    iota.multisig.initiateTransfer(
      6,
      address,
      remainderAddress,
      multisigTransfer,
      function(e, initiatedBundle) {
        if (e) {
          console.log(e);
        }

        iota.multisig.addSignature(
          initiatedBundle,
          address,
          iota.multisig.getKey("ABCDFG", 0, 3),
          function(e, firstSignedBundle) {
            if (e) {
              console.log(e);
            }

            iota.multisig.addSignature(
              firstSignedBundle,
              address,
              iota.multisig.getKey("FDSAG", 0, 3),
              function(e, finalBundle) {
                if (!e) {
                  console.log(
                    "IS VALID SIGNATURE: ",
                    iota.utils.validateSignatures(finalBundle, address)
                  );
                }
              }
            );
          }
        );
      }
    );
  };

  startChannel = async maxTransactions => {
    // lewis iota vanlla here
    if (isNaN(maxTransactions)) {
      maxTransactions = 100;
    }
    console.log(maxTransactions);
    var seeds = {
      master: seedGen(81),
      slave: 0
    };
    seeds.slave = seeds.master; // a thing
    /// Act as Player & Create inital addresses
    var flash = Flash.master.initalize(
      seeds.master,
      maxTransactions,
      50,
      "KFENNTAJQPKKL9TQISCID9ERYXQNGBJWEUIKVH9QEUSC9PLMFLJOGHYPYGSUZXRXHBAMAKWIFZWYCP9FYLTMKNOVEB"
    );
    flash.stake = {
      master: 50,
      slave: 50
    };
    flash.index = 0;
    console.log("first half of room", flash);

    // Act as Player 2 & Sign those addeses
    flash = Flash.slave.initalize(
      seeds.slave,
      flash,
      "KFENNTAJQPKKL9TQISCID9ERYXQNGBJWEUIKVH9QEUSC9PLMFLJOGHYPYGSUZXRXHBAMAKWIFZWYCP9FYLTMKNOVEE"
    );

    flash.index = 1;
    flash.stake = {
      master: 50,
      slave: 50
    };
    console.log("updated flash", flash);
    console.log("deposit address: ", flash.addresses[0].address);
    this.setState({ flash, seeds });
  };

  closeChannel = async (seeds, flash) => {
    var result = await this.closeRoom.attachAndPOWClosedBundle(flash.bundles);
    console.log("attachAndPOWClosedBundle", result);
    console.log(
      "attachAndPOWClosedBundle > validateSignatures",
      iota.utils.validateSignatures(result[0], flash.addresses[0].address)
    );
    return;
    flash = await Flash.master.closeChannel(flash, seeds.master);
    flash = await Flash.slave.closeFinalBundle(flash, seeds.slave);
    console.log("closeFinalBundle", flash);
    //console.log('validateSignatures', iota.utils.validateSignatures(flash.finalBundles, flash.addresses[0].address))
  };

  send = (to, from, amount, flash, seeds) => {
    for (var key of Object.keys(flash.stake)) {
      flash.stake[key] -= amount;
      flash.total[key] += amount;
    }
    flash.total[from] -= amount;
    flash.total[to] += amount;
    var remainder = Object.values(flash.stake).reduce(
      (sum, value) => sum + value
    );
    if (remainder < 0) {
      alert(
        "This flash channel has no transportable balance left. The room should be closed."
      );
      return;
    }

    (async () => {
      flash = await Flash.master.newTransaction(flash, seeds[to]);
      console.log("first half of tx: ", flash);
      flash = await Flash.slave.closeTransaction(flash, seeds[from]);
      console.log("second half of tx: ", flash);
      this.setState({ flash });
    })();
  };

  render() {
    var { seeds, flash, transactions } = this.state;
    return (
      <Wrapper>
        <div>
          <h4>Flash Object</h4>
          <button onClick={() => this.testMultisig()}>Test Multisig</button>
          <div>
            Max number of transactions (defaults to 100)<br />
            <input
              value={transactions}
              type="number"
              onChange={data =>
                this.setState({ transactions: data.target.value })}
            />
            <button onClick={() => this.startChannel(parseInt(transactions))}>
              Start Channel
            </button>
          </div>
          <div>
            <p>
              {/* Balance left: {flash && flash.balance.remainder} */}
            </p>
          </div>
          <div>
            <button onClick={() => this.closeChannel(seeds, flash)}>
              Close Channel
            </button>

            <p>
              {/* Balance left: {flash && flash.balance.remainder} */}
            </p>
          </div>
        </div>
        <div>
          <h2>Player 1</h2>
          <p>
            Seed: {seeds.master && seeds.master.substring(0, 10)}...
          </p>
          <button
            onClick={() => this.send("master", "slave", 10, flash, seeds)}
          >
            Send 10
          </button>
        </div>
        <div>
          <h2>Player 2</h2>
          <p>
            Seed: {seeds.slave && seeds.slave.substring(0, 10)}...
          </p>
          <button
            onClick={() => this.send("master", "slave", 10, flash, seeds)}
          >
            Send 10
          </button>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
