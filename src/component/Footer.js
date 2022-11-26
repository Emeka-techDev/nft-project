import React from "react";
import "../css/footer.css";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer">
                <div className="footer-nftb-image">
                        <img src="https://nftb.io/static/img/svg/logo.svg" alt="phone image" />
                        
                </div>
            
                <small>@2022 NFTb-- Marketplace for NFTs and digital goods</small>
            

                <div className="icons">
                    {/* <div><i class="fa fa-twitter" aria-hidden="true"></i></div> */}
                    
                    <div>
                        <svg fill="#6B6B6B" width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M36.5,22.6487778 C35.8928,22.9286056 35.2405,23.1178667 34.5552,23.2026278 C35.2548,22.7672111 35.7916,22.0775111 36.0435,21.2566056 C35.3901,21.6595111 34.6652,21.9521111 33.8941,22.1100222 C33.277,21.4261278 32.397,21 31.4235,21 C29.2389,21 27.6318,23.1178667 28.1257,25.3181722 C25.313,25.1718722 22.8182,23.7715722 21.1484,21.6432556 C20.2618,23.2235278 20.6886,25.2926278 22.1967,26.33995 C21.6412,26.3213722 21.1198,26.1634611 20.6633,25.8998889 C20.6259,27.5289278 21.7501,29.0534667 23.3781,29.3925111 C22.9018,29.5272 22.3793,29.55855 21.8491,29.4528889 C22.2803,30.8508667 23.5299,31.868 25.0116,31.8958667 C23.5882,33.0546556 21.7963,33.5725111 20,33.3530611 C21.4982,34.3504556 23.278,34.9333333 25.1887,34.9333333 C31.4741,34.9333333 35.0249,29.4168944 34.8104,24.4694 C35.4726,23.9736056 36.0457,23.3535722 36.5,22.6487778"></path></svg>
                    </div>
                    
                    <div>
                        <svg fill="#6B6B6B" width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M25.5749425,30.9883493 L25.2556057,35.6433114 C25.7124907,35.6433114 25.9103669,35.4399069 26.1476575,35.1956547 L28.2897082,33.0740791 L32.7282495,36.4427577 C33.542277,36.9129223 34.1157964,36.6653356 34.3353908,35.6666529 L37.2488371,21.5183692 L37.2496414,21.5175355 C37.5078458,20.2704325 36.8144746,19.7827619 36.0213608,20.0887023 L18.8962168,26.8835797 C17.7274599,27.3537443 17.7451562,28.0289805 18.6975362,28.3349209 L23.0757494,29.746248 L33.2454626,23.1514406 C33.7240658,22.8229923 34.1592327,23.0047226 33.8012858,23.3331708 L25.5749425,30.9883493 Z"></path></svg>
                    </div>
                    
                    <div>
                        <svg fill="#6B6B6B" width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M31.6377029,19 C34.5205346,19 36.8793782,21.2867417 36.9955186,24.1416009 L37,24.3622971 L37,31.6377029 C37,34.5205664 34.7132583,36.8793798 31.8583991,36.9955186 L31.6377029,37 L24.3622971,37 C21.4794336,37 19.1206202,34.7132583 19.0044814,31.8583991 L19,31.6377029 L19,24.3622971 C19,21.4794336 21.2867417,19.1206202 24.1416009,19.0044814 L24.3622971,19 L31.6377029,19 Z M28,24 C25.7943965,24 24,25.7944028 24,27.999986 C24,30.2055692 25.7943965,32 28,32 C30.2056035,32 32,30.2055972 32,27.999986 C32,25.7943747 30.2056035,24 28,24 Z M32.999944,20.9003469 C32.3849269,20.9003469 31.8863571,21.3989167 31.8863571,22.0139338 C31.8863571,22.6289509 32.3849269,23.1275208 32.999944,23.1275208 C33.6149611,23.1275208 34.113531,22.6289509 34.113531,22.0139338 C34.113531,21.3989167 33.6149611,20.9003469 32.999944,20.9003469 Z"></path></svg>
                    </div>
                    <div>
                        <svg fill="#6B6B6B" width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M37.2436085,21.2171053 C37.2436085,21.2171053 35.4922416,19.2803122 31.5156771,19 L31.5156771,19.6115517 C31.5156771,19.6115517 33.6967373,19.4791978 36.3965803,22.2552253 C34.3586606,20.7237217 31.4514404,19.7643332 28.2222217,19.7643332 C24.9930031,19.7643332 22.0857829,20.7235799 20.0478632,22.2552253 C22.7477061,19.4791978 24.9287664,19.6115517 24.9287664,19.6115517 L24.9287664,19 C20.9522019,19.2803122 19.200835,21.2171053 19.200835,21.2171053 C16.1707094,25.2941164 16,34.2131812 16,34.2131812 C18.8542555,37.8061714 22.4405107,37.3476849 22.4405107,37.3476849 L23.7578385,35.3601066 C22.0590289,34.8800576 20.845865,33.7779595 20.1167173,32.9197161 C22.1509702,34.4215712 25.028992,35.3601066 28.2222217,35.3601066 C31.4154515,35.3601066 34.2934733,34.4217131 36.3277262,32.9197161 C35.5985784,33.7778177 34.3854146,34.8800576 32.6866049,35.3601066 L34.0039328,37.3476849 C34.0039328,37.3476849 37.590188,37.8064551 40.4444438,34.2131812 C40.4447151,34.2130393 40.2738699,25.2941164 37.2436085,21.2171053 Z M24.4166382,31.690371 C23.2713779,31.690371 22.3430013,30.6600532 22.3430013,29.3888599 C22.3430013,28.1178084 23.2713779,27.0873488 24.4166382,27.0873488 C25.5618986,27.0873488 26.4902752,28.1178084 26.4902752,29.3888599 C26.4902752,30.6599114 25.5618986,31.690371 24.4166382,31.690371 Z M32.0280768,31.690371 C30.8828165,31.690371 29.9544399,30.6600532 29.9544399,29.3888599 C29.9544399,28.1178084 30.8828165,27.0873488 32.0280768,27.0873488 C33.1733372,27.0873488 34.1017138,28.1178084 34.1017138,29.3888599 C34.1017138,30.6599114 33.173473,31.690371 32.0280768,31.690371 Z"></path></svg>
                    </div>
                    
                    <div>
                        <svg fill="#686868" width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g transform="translate(19.011111, 20.307310)"><path d="M20.192145,16.9289867 L13.8194831,13.9692993 L13.7714771,0.552645712 C13.7703757,0.23944214 14.1088174,0.0330609996 14.4009908,0.168785934 L20.4425719,2.97552881 C20.5946788,3.04618502 20.6914215,3.19486274 20.6914215,3.35791553 L20.6914215,16.6256882 C20.6914215,16.8736198 20.4233811,17.0364187 20.192145,16.9289867 Z"></path><path fill="#B0B0B0" d="M13.8194831,13.9692993 L6.92236018,10.7655407 L13.5622738,0.204088639 C13.6795743,0.0175176501 13.9243228,-0.0526306037 14.1279556,0.0419501701 L20.2539762,2.88795778 C20.4881567,2.99676123 20.5739106,3.27710027 20.4385234,3.49135467 L13.8194831,13.9692993 Z"></path><path opacity="0.8" d="M13.8194831,13.9692993 L6.92236018,10.7655407 L0.600488194,0.819930369 C0.424353403,0.542842227 0.73082794,0.214755644 1.03414782,0.355661695 L6.92236018,3.09113882 L13.8194831,13.9692993 Z"></path><path d="M6.42308377,16.9289359 L0.197376121,14.0366538 C0.0767106449,13.9805758 0,13.86268 0,13.7333553 L0,0.393554959 C0,0.153496561 0.259575363,-0.00422272106 0.483555724,0.0998567663 L6.92236018,3.09113882 L6.92236018,16.6256374 C6.92236018,16.8735691 6.65431984,17.0363679 6.42308377,16.9289359 Z"></path></g></svg>
                    </div>


                    {/* <div><i class="fa fa-twitter" aria-hidden="true"></i></div> *}
                    {/* <div><i class="fa fa-telegram" aria-hidden="true"></i></div>
                    <div><i class="fa fa-instagram" aria-hidden="true"></i></div>
                    <div><i class="fa fa-facebook" aria-hidden="true"></i></div> */}
                </div>

                <form action="#" className="form-container">
                    <div className="email-container">
                        <input type="email"  placeholder="email" />
                    </div>
                </form>

                <nav className="footer-navbar">
                        <ul>
                            <li>Hello center</li>
                            <li>Blog</li>
                            <li>Brand kit</li>
                        </ul>
                </nav>
            </div>

            <div className="footer-policy">
                <nav className="footer-policy-navbar">
                    <ul>
                        <li>Terms of service</li>
                        <li>Privacy policy</li>
                    </ul>
                </nav>
                
                <div className="mode">
                    <div className="en-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke="#6B727B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"></path><path d="M4 12H21"></path><path d="M12 21C14.2091 21 16 16.9706 16 12C16 7.02944 14.2091 3 12 3C9.79086 3 8 7.02944 8 12C8 16.9706 9.79086 21 12 21Z"></path></svg>
                        <span>EN </span>
                    </div>
                    <div className="mode-mode">
                        <span className="light-mode">
                            <svg fill="white" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,24.3832168 C16.5874126,24.3832168 17.0871049,24.8218182 17.1511198,25.4124681 L17.158042,25.5412587 L17.158042,26.8 C17.158042,27.4293706 16.6293706,27.958042 16,27.958042 C15.4125874,27.958042 14.9128951,27.4975105 14.8488802,26.9244047 L14.841958,26.8 L14.841958,25.5412587 C14.841958,24.9118881 15.3706294,24.3832168 16,24.3832168 Z M8.42237762,21.9160839 C8.87552448,21.4629371 9.63076923,21.4629371 10.0839161,21.9160839 C10.5046953,22.3368631 10.534751,22.9964179 10.1740831,23.4513079 L10.0839161,23.5524476 L9.2027972,24.4335664 C8.97622378,24.6601399 8.67412587,24.786014 8.37202797,24.786014 C8.06993007,24.786014 7.76783217,24.6601399 7.54125874,24.4335664 C7.12047952,24.0127872 7.09042386,23.3532325 7.45109177,22.8983425 L7.54125874,22.7972028 L8.42237762,21.9160839 Z M21.9412587,21.9160839 C22.362038,21.4953047 23.0215927,21.465249 23.4764827,21.8259169 L23.5776224,21.9160839 L24.4839161,22.7972028 C24.9370629,23.2503497 24.9370629,23.9804196 24.4839161,24.4335664 C24.2573427,24.6601399 23.9552448,24.786014 23.6531469,24.786014 C23.3942058,24.786014 23.1352647,24.693535 22.9238843,24.5244307 L22.8223776,24.4335664 L21.9412587,23.5524476 C21.4881119,23.0993007 21.4881119,22.3692308 21.9412587,21.9160839 Z M16,9.60559441 C19.5244755,9.60559441 22.3944056,12.4755245 22.3944056,16 C22.3944056,19.5244755 19.5244755,22.3944056 16,22.3944056 C12.4755245,22.3944056 9.60559441,19.5244755 9.60559441,16 C9.60559441,12.4755245 12.4755245,9.60559441 16,9.60559441 Z M16,11.9216783 C13.7594406,11.9216783 11.9216783,13.7594406 11.9216783,16 C11.9216783,18.2405594 13.7594406,20.0783217 16,20.0783217 C18.2405594,20.0783217 20.0783217,18.2405594 20.0783217,16 C20.0783217,13.7594406 18.2405594,11.9216783 16,11.9216783 Z M6.45874126,14.841958 C7.08811189,14.841958 7.61678322,15.3706294 7.61678322,16 C7.61678322,16.5874126 7.17818182,17.0871049 6.58753193,17.1511198 L6.45874126,17.158042 L5.2,17.158042 C4.57062937,17.158042 4.04195804,16.6293706 4.04195804,16 C4.04195804,15.4125874 4.50248951,14.9128951 5.07559534,14.8488802 L5.2,14.841958 L6.45874126,14.841958 Z M26.8,14.841958 C27.4293706,14.841958 27.958042,15.3706294 27.958042,16 C27.958042,16.5874126 27.4975105,17.0871049 26.9244047,17.1511198 L26.8,17.158042 L25.5412587,17.158042 C24.9118881,17.158042 24.3832168,16.6293706 24.3832168,16 C24.3832168,15.4125874 24.8437483,14.9128951 25.4168541,14.8488802 L25.5412587,14.841958 L26.8,14.841958 Z M7.56643357,7.56643357 C7.98721279,7.14565435 8.64676752,7.11559869 9.10165753,7.47626659 L9.2027972,7.56643357 L10.0839161,8.44755245 C10.5370629,8.9006993 10.5370629,9.63076923 10.0839161,10.0839161 C9.85734266,10.3104895 9.55524476,10.4363636 9.25314685,10.4363636 C8.99420579,10.4363636 8.73526474,10.3438847 8.52388428,10.1747803 L8.42237762,10.0839161 L7.56643357,9.2027972 C7.11328671,8.74965035 7.11328671,8.01958042 7.56643357,7.56643357 Z M22.8223776,7.54125874 C23.2755245,7.08811189 24.0055944,7.08811189 24.4587413,7.54125874 C24.8795205,7.96203796 24.9095761,8.62159269 24.5489082,9.0764827 L24.4587413,9.17762238 L23.5776224,10.0587413 C23.351049,10.2853147 23.048951,10.4111888 22.7468531,10.4111888 C22.4879121,10.4111888 22.228971,10.3372057 22.0334441,10.1575323 L21.9412587,10.0587413 C21.5204795,9.63796204 21.4904239,8.97840731 21.8510918,8.5235173 L21.9412587,8.42237762 L22.8223776,7.54125874 Z M16,4.04195804 C16.5874126,4.04195804 17.0871049,4.50248951 17.1511198,5.07559534 L17.158042,5.2 L17.158042,6.45874126 C17.158042,7.08811189 16.6293706,7.61678322 16,7.61678322 C15.4125874,7.61678322 14.9128951,7.17818182 14.8488802,6.58753193 L14.841958,6.45874126 L14.841958,5.2 C14.841958,4.57062937 15.3706294,4.04195804 16,4.04195804 Z"></path></svg>
                        </span> 
                     
                        <span className="dark-mode" >
                            <svg fill="white" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.5280357,6.00023744 C16.7167629,6.0039114 16.9051481,6.0138161 17.093318,6.02868804 C17.6269969,6.07207137 17.8694752,6.71694404 17.4965618,7.1011747 C16.5262604,8.09689345 15.9565069,9.40928505 15.8870949,10.7899486 L15.8799133,11.066918 C15.88061,14.2224717 18.4288928,16.7668883 21.5908764,16.7668883 C22.8154278,16.7648617 24.0062224,16.3703583 24.9887769,15.641265 C25.4242384,15.3177267 26.0383362,15.655667 25.9981214,16.1966667 C25.6405755,21.0609638 21.6415633,24.8551547 16.7876352,24.9959529 L16.5171107,25 C11.2684815,25 7,20.73982 7,15.5 C7,10.3505217 11.1226225,6.14719397 16.2453217,6.0037824 L16.5280357,6.00023744 Z M14.396,8.304 L14.1868743,8.36864741 C11.1792205,9.34951807 9,12.1765652 9,15.5 C9,19.6342071 12.3720088,23.0000009 16.5152266,23.0000009 C19.5250132,22.9971656 22.1487965,21.2145308 23.3412579,18.6229303 L23.371,18.554 L23.2219676,18.590453 C22.7959094,18.6830516 22.3608945,18.739827 21.921332,18.7593005 L21.5908764,18.7668883 C17.3255623,18.7668883 13.8808541,15.3283774 13.879916,11.0636685 C13.8812642,10.2338538 14.0166011,9.41783255 14.2739509,8.64479641 L14.396,8.304 Z"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Footer;