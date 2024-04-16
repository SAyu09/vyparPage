import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.background} />
      <div className={styles.contentArea}>
        <div className={styles.header}>
          <b className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </b>
          <div className={styles.settingsButton}>
            <div className={styles.productList} />
          </div>
        </div>
      </div>
      <div className={styles.itemCard}>
        <div className={styles.productName}>
          <div className={styles.menu}>MENU</div>
        </div>
        <div className={styles.ratingStars}>
          <div className={styles.price}>
            <div className={styles.addToCartButton}>
              <div className={styles.buyNowButton}>
                <div className={styles.cart}>
                  <img
                    className={styles.secondaryScores}
                    loading="lazy"
                    alt=""
                    src="/secondary--scores.svg"
                  />
                  <div className={styles.productInfoPanel}>
                    <div className={styles.home}>Home</div>
                  </div>
                </div>
                <FormControl
                  className={styles.newReviewInput}
                  variant="filled"
                  sx={{
                    borderRadius: "0px 0px 0px 0px",
                    width: "127px",
                    height: "24px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select color="primary" disableUnderline displayEmpty />
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className={styles.priceChild} />
          </div>
          <div className={styles.logo}>
            <div className={styles.menuBar}>
              <div className={styles.menuItem}>
                <div className={styles.vuesaxlinearbookParent}>
                  <img
                    className={styles.vuesaxlinearbookIcon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.helpLink}>
                    <div className={styles.addProduct}>Add Product</div>
                  </div>
                </div>
              </div>
              <div className={styles.menuItem1}>
                <div className={styles.vuesaxlinearbookGroup}>
                  <img
                    className={styles.vuesaxlinearbookIcon1}
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.productListWrapper}>
                    <div className={styles.productList1}>Product List</div>
                  </div>
                </div>
              </div>
              <div className={styles.menuItem2}>
                <div className={styles.vuesaxlinearbookContainer}>
                  <img
                    className={styles.vuesaxlinearbookIcon2}
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.dashboardAnalyticsWrapper}>
                    <div className={styles.dashboardAnalytics}>
                      Dashboard Analytics
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.menuItem3}>
                <div className={styles.menuItemChild} />
              </div>
              <div className={styles.menuItem4}>
                <div className={styles.vuesaxlinearlink2Parent}>
                  <img
                    className={styles.vuesaxlinearlink2Icon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearlink2.svg"
                  />
                  <div className={styles.integrationWrapper}>
                    <div className={styles.integration}>Integration</div>
                  </div>
                </div>
              </div>
              <div className={styles.menuItem5}>
                <div className={styles.multiUserParent}>
                  <img
                    className={styles.multiUserIcon}
                    loading="lazy"
                    alt=""
                    src="/multi-user.svg"
                  />
                  <div className={styles.teamWrapper}>
                    <div className={styles.team}>Team</div>
                  </div>
                </div>
              </div>
              <div className={styles.aboutUsLink}>
                <div className={styles.contactLink}>
                  <input
                    className={styles.questionMark}
                    checked={true}
                    type="radio"
                  />
                  <div className={styles.languageFlags}>
                    <div
                      className={styles.supportHelp}
                    >{`Support & Help!`}</div>
                  </div>
                </div>
              </div>
              <div className={styles.menuItem6}>
                <div className={styles.menuItemItem} />
              </div>
              <div className={styles.speechBubble}>
                <div className={styles.general}>GENERAL</div>
              </div>
              <div className={styles.menuItem7}>
                <div className={styles.secondaryCategoriesParent}>
                  <img
                    className={styles.secondaryCategories}
                    loading="lazy"
                    alt=""
                    src="/secondary--categories@2x.png"
                  />
                  <div className={styles.settingsWrapper}>
                    <div className={styles.settings}>Settings</div>
                  </div>
                </div>
              </div>
              <div className={styles.userMessage}>
                <div className={styles.newMessageButton}>
                  <img
                    className={styles.secondaryCategories1}
                    alt=""
                    src="/secondary--categories-1@2x.png"
                  />
                  <div className={styles.union}>
                    <div className={styles.subscription}>Subscription</div>
                  </div>
                  <div className={styles.shoppingCartIcon}>
                    <div className={styles.new}>
                      <div className={styles.bg} />
                      <div className={styles.new1}>NEW</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.deviceLabel}>
                <div className={styles.backgroundComplete}>
                  <img
                    className={styles.secondaryAllGames}
                    loading="lazy"
                    alt=""
                    src="/secondary--all-games@2x.png"
                  />
                  <div className={styles.logOutWrapper}>
                    <div className={styles.logOut}>Log out</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productListContainer}>
        <div className={styles.legalPrivacyContainer}>
          <p className={styles.legalPrivacy}>
            Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
            Resource Chart
          </p>
          <p className={styles.languageEnglishUs}>
            <span className={styles.language}>Language</span>
            <span className={styles.span}>{`: `}</span>
            <span>English (US)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
