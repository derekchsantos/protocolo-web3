**THIS CHECKLIST IS NOT COMPLETE**. Use `--show-ignored-findings` to show all the results.
Summary
 - [incorrect-exp](#incorrect-exp) (1 results) (High)
 - [divide-before-multiply](#divide-before-multiply) (9 results) (Medium)
 - [unused-return](#unused-return) (1 results) (Medium)
 - [assembly](#assembly) (33 results) (Informational)
 - [pragma](#pragma) (1 results) (Informational)
 - [solc-version](#solc-version) (6 results) (Informational)
 - [naming-convention](#naming-convention) (2 results) (Informational)
 - [too-many-digits](#too-many-digits) (7 results) (Informational)
 - [immutable-states](#immutable-states) (2 results) (Optimization)
## incorrect-exp
Impact: High
Confidence: Medium
 - [ ] ID-0
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) has bitwise-xor operator ^ instead of the exponentiation operator **: 
	 - [inverse = (3 * denominator) ^ 2](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L259)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


## divide-before-multiply
Impact: Medium
Confidence: Medium
 - [ ] ID-1
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [low = low / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L247)
	- [result = low * inverse](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L274)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-2
[Math.invMod(uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L317-L363) performs a multiplication on the result of a division:
	- [quotient = gcd / remainder](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L339)
	- [(gcd,remainder) = (remainder,gcd - remainder * quotient)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L341-L348)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L317-L363


 - [ ] ID-3
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L244)
	- [inverse *= 2 - denominator * inverse](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L268)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-4
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L244)
	- [inverse = (3 * denominator) ^ 2](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L259)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-5
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L244)
	- [inverse *= 2 - denominator * inverse](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L266)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-6
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L244)
	- [inverse *= 2 - denominator * inverse](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L267)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-7
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L244)
	- [inverse *= 2 - denominator * inverse](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L264)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-8
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L244)
	- [inverse *= 2 - denominator * inverse](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L263)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-9
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L244)
	- [inverse *= 2 - denominator * inverse](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L265)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


## unused-return
Impact: Medium
Confidence: Medium
 - [ ] ID-10
[Staking.getPrice()](contracts/Staking.sol#L16-L19) ignores return value by [(None,price,None,None,None) = priceFeed.latestRoundData()](contracts/Staking.sol#L17)

contracts/Staking.sol#L16-L19


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-11
[SafeCast.toUint(bool)](node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol#L1157-L1161) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol#L1158-L1160)

node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol#L1157-L1161


 - [ ] ID-12
[StorageSlot.getAddressSlot(bytes32)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L66-L70) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L67-L69)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L66-L70


 - [ ] ID-13
[Math.tryModExp(bytes,bytes,bytes)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L451-L473) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L463-L472)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L451-L473


 - [ ] ID-14
[StorageSlot.getUint256Slot(bytes32)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L93-L97) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L94-L96)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L93-L97


 - [ ] ID-15
[Bytes._unsafeReadBytesOffset(bytes,uint256)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L326-L331) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L328-L330)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L326-L331


 - [ ] ID-16
[ERC721Utils.checkOnERC721Received(address,address,address,uint256,bytes)](node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol#L25-L49) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol#L43-L45)

node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol#L25-L49


 - [ ] ID-17
[Math.log2(uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L619-L658) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L655-L657)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L619-L658


 - [ ] ID-18
[Strings.toChecksumHexString(address)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L108-L126) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Strings.sol#L113-L115)

node_modules/@openzeppelin/contracts/utils/Strings.sol#L108-L126


 - [ ] ID-19
[StorageSlot.getBooleanSlot(bytes32)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L75-L79) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L76-L78)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L75-L79


 - [ ] ID-20
[StorageSlot.getBytes32Slot(bytes32)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L84-L88) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L85-L87)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L84-L88


 - [ ] ID-21
[Bytes.replace(bytes,uint256,bytes,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L154-L172) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L167-L169)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L154-L172


 - [ ] ID-22
[Panic.panic(uint256)](node_modules/@openzeppelin/contracts/utils/Panic.sol#L50-L56) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Panic.sol#L51-L55)

node_modules/@openzeppelin/contracts/utils/Panic.sol#L50-L56


 - [ ] ID-23
[Bytes.splice(bytes,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L117-L129) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L123-L126)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L117-L129


 - [ ] ID-24
[StorageSlot.getInt256Slot(bytes32)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L102-L106) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L103-L105)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L102-L106


 - [ ] ID-25
[Bytes.toNibbles(bytes)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L210-L245) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L211-L244)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L210-L245


 - [ ] ID-26
[Strings._unsafeWriteBytesOffset(bytes,uint256,bytes1)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L526-L531) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Strings.sol#L528-L530)

node_modules/@openzeppelin/contracts/utils/Strings.sol#L526-L531


 - [ ] ID-27
[StorageSlot.getBytesSlot(bytes)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L138-L142) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L139-L141)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L138-L142


 - [ ] ID-28
[Strings.escapeJSON(string)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L461-L505) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Strings.sol#L468-L470)
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Strings.sol#L499-L502)

node_modules/@openzeppelin/contracts/utils/Strings.sol#L461-L505


 - [ ] ID-29
[Math.mulDiv(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L229-L236)
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L242-L251)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L206-L277


 - [ ] ID-30
[Math.mul512(uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L37-L46) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L41-L45)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L37-L46


 - [ ] ID-31
[StorageSlot.getStringSlot(bytes32)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L111-L115) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L112-L114)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L111-L115


 - [ ] ID-32
[Strings.toString(uint256)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L42-L60) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Strings.sol#L47-L49)
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Strings.sol#L52-L54)

node_modules/@openzeppelin/contracts/utils/Strings.sol#L42-L60


 - [ ] ID-33
[Strings._unsafeReadBytesOffset(bytes,uint256)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L513-L518) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Strings.sol#L515-L517)

node_modules/@openzeppelin/contracts/utils/Strings.sol#L513-L518


 - [ ] ID-34
[StorageSlot.getStringSlot(string)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L120-L124) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L121-L123)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L120-L124


 - [ ] ID-35
[Math.tryMul(uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L73-L84) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L76-L80)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L73-L84


 - [ ] ID-36
[Bytes.slice(bytes,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L86-L98) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L93-L95)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L86-L98


 - [ ] ID-37
[Math.tryMod(uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L102-L110) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L105-L108)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L102-L110


 - [ ] ID-38
[Math.tryDiv(uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L89-L97) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L92-L95)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L89-L97


 - [ ] ID-39
[StorageSlot.getBytesSlot(bytes32)](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L129-L133) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L130-L132)

node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L129-L133


 - [ ] ID-40
[Math._zeroBytes(bytes)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L478-L490) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L482-L484)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L478-L490


 - [ ] ID-41
[Math.tryModExp(uint256,uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L411-L435) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L413-L434)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L411-L435


 - [ ] ID-42
[Bytes.concat(bytes[])](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L183-L203) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L194-L196)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L183-L203


 - [ ] ID-43
[Math.add512(uint256,uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L25-L30) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L26-L29)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L25-L30


## pragma
Impact: Informational
Confidence: High
 - [ ] ID-44
7 different versions of Solidity are used:
	- Version constraint ^0.8.0 is used by:
		-[^0.8.0](node_modules/@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol#L2)
	- Version constraint >=0.8.4 is used by:
		-[>=0.8.4](node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol#L4)
	- Version constraint ^0.8.20 is used by:
		-[^0.8.20](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L4)
		-[^0.8.20](node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol#L4)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/Panic.sol#L4)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/ReentrancyGuard.sol#L4)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L5)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L4)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol#L5)
		-[^0.8.20](node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol#L4)
		-[^0.8.20](contracts/Governance.sol#L2)
		-[^0.8.20](contracts/NFT.sol#L2)
		-[^0.8.20](contracts/Staking.sol#L2)
		-[^0.8.20](contracts/Token.sol#L2)
	- Version constraint >=0.4.16 is used by:
		-[>=0.4.16](node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4)
		-[>=0.4.16](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4)
	- Version constraint >=0.6.2 is used by:
		-[>=0.6.2](node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4)
		-[>=0.6.2](node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol#L4)
		-[>=0.6.2](node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol#L4)
	- Version constraint ^0.8.24 is used by:
		-[^0.8.24](node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#L4)
		-[^0.8.24](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L4)
		-[^0.8.24](node_modules/@openzeppelin/contracts/utils/Strings.sol#L4)
	- Version constraint >=0.5.0 is used by:
		-[>=0.5.0](node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#L4)

node_modules/@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol#L2


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-45
Version constraint >=0.6.2 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- MissingSideEffectsOnSelectorAccess
	- AbiReencodingHeadOverflowWithStaticArrayCleanup
	- DirtyBytesArrayToStorage
	- NestedCalldataArrayAbiReencodingSizeValidation
	- ABIDecodeTwoDimensionalArrayMemory
	- KeccakCaching
	- EmptyByteArrayCopy
	- DynamicArrayCleanup
	- MissingEscapingInFormatting
	- ArraySliceDynamicallyEncodedBaseType
	- ImplicitConstructorCallvalueCheck
	- TupleAssignmentMultiStackSlotComponents
	- MemoryArrayCreationOverflow.
It is used by:
	- [>=0.6.2](node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4)
	- [>=0.6.2](node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol#L4)
	- [>=0.6.2](node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol#L4)

node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4


 - [ ] ID-46
Version constraint >=0.5.0 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- DirtyBytesArrayToStorage
	- ABIDecodeTwoDimensionalArrayMemory
	- KeccakCaching
	- EmptyByteArrayCopy
	- DynamicArrayCleanup
	- ImplicitConstructorCallvalueCheck
	- TupleAssignmentMultiStackSlotComponents
	- MemoryArrayCreationOverflow
	- privateCanBeOverridden
	- SignedArrayStorageCopy
	- ABIEncoderV2StorageArrayWithMultiSlotElement
	- DynamicConstructorArgumentsClippedABIV2
	- UninitializedFunctionPointerInConstructor
	- IncorrectEventSignatureInLibraries
	- ABIEncoderV2PackedStorage.
It is used by:
	- [>=0.5.0](node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#L4)

node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#L4


 - [ ] ID-47
Version constraint >=0.8.4 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess
	- AbiReencodingHeadOverflowWithStaticArrayCleanup
	- DirtyBytesArrayToStorage
	- DataLocationChangeInInternalOverride
	- NestedCalldataArrayAbiReencodingSizeValidation
	- SignedImmutables.
It is used by:
	- [>=0.8.4](node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol#L4)

node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol#L4


 - [ ] ID-48
Version constraint >=0.4.16 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- DirtyBytesArrayToStorage
	- ABIDecodeTwoDimensionalArrayMemory
	- KeccakCaching
	- EmptyByteArrayCopy
	- DynamicArrayCleanup
	- ImplicitConstructorCallvalueCheck
	- TupleAssignmentMultiStackSlotComponents
	- MemoryArrayCreationOverflow
	- privateCanBeOverridden
	- SignedArrayStorageCopy
	- ABIEncoderV2StorageArrayWithMultiSlotElement
	- DynamicConstructorArgumentsClippedABIV2
	- UninitializedFunctionPointerInConstructor_0.4.x
	- IncorrectEventSignatureInLibraries_0.4.x
	- ExpExponentCleanup
	- NestedArrayFunctionCallDecoder
	- ZeroFunctionSelector.
It is used by:
	- [>=0.4.16](node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4)
	- [>=0.4.16](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4)

node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4


 - [ ] ID-49
Version constraint ^0.8.0 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess
	- AbiReencodingHeadOverflowWithStaticArrayCleanup
	- DirtyBytesArrayToStorage
	- DataLocationChangeInInternalOverride
	- NestedCalldataArrayAbiReencodingSizeValidation
	- SignedImmutables
	- ABIDecodeTwoDimensionalArrayMemory
	- KeccakCaching.
It is used by:
	- [^0.8.0](node_modules/@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol#L2)

node_modules/@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol#L2


 - [ ] ID-50
Version constraint ^0.8.20 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- VerbatimInvalidDeduplication
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess.
It is used by:
	- [^0.8.20](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L4)
	- [^0.8.20](node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol#L4)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/Panic.sol#L4)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/ReentrancyGuard.sol#L4)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/StorageSlot.sol#L5)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L4)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol#L5)
	- [^0.8.20](node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol#L4)
	- [^0.8.20](contracts/Governance.sol#L2)
	- [^0.8.20](contracts/NFT.sol#L2)
	- [^0.8.20](contracts/Staking.sol#L2)
	- [^0.8.20](contracts/Token.sol#L2)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L4


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-51
Parameter [Governance.vote(uint256)._id](contracts/Governance.sol#L9) is not in mixedCase

contracts/Governance.sol#L9


 - [ ] ID-52
Parameter [Governance.create(string)._d](contracts/Governance.sol#L8) is not in mixedCase

contracts/Governance.sol#L8


## too-many-digits
Impact: Informational
Confidence: Medium
 - [ ] ID-53
[Token.constructor()](contracts/Token.sol#L6-L8) uses literals with too many digits:
	- [_mint(msg.sender,1000000 * 10 ** decimals())](contracts/Token.sol#L7)

contracts/Token.sol#L6-L8


 - [ ] ID-54
[Bytes.toNibbles(bytes)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L210-L245) uses literals with too many digits:
	- [chunk_toNibbles_asm_0 = 0x00000000ffffffff00000000ffffffff00000000ffffffff00000000ffffffff & chunk_toNibbles_asm_0 << 32 | chunk_toNibbles_asm_0](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L226-L229)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L210-L245


 - [ ] ID-55
[Math.log2(uint256)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L619-L658) uses literals with too many digits:
	- [r = r | byte(uint256,uint256)(x >> r,0x0000010102020202030303030303030300000000000000000000000000000000)](node_modules/@openzeppelin/contracts/utils/math/Math.sol#L656)

node_modules/@openzeppelin/contracts/utils/math/Math.sol#L619-L658


 - [ ] ID-56
[Bytes.reverseBytes32(bytes32)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L258-L272) uses literals with too many digits:
	- [value = ((value >> 32) & 0x00000000FFFFFFFF00000000FFFFFFFF00000000FFFFFFFF00000000FFFFFFFF) | ((value & 0x00000000FFFFFFFF00000000FFFFFFFF00000000FFFFFFFF00000000FFFFFFFF) << 32)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L265-L267)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L258-L272


 - [ ] ID-57
[Bytes.toNibbles(bytes)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L210-L245) uses literals with too many digits:
	- [chunk_toNibbles_asm_0 = 0x0000000000000000ffffffffffffffff0000000000000000ffffffffffffffff & chunk_toNibbles_asm_0 << 64 | chunk_toNibbles_asm_0](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L222-L225)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L210-L245


 - [ ] ID-58
[Bytes.reverseBytes16(bytes16)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L275-L286) uses literals with too many digits:
	- [value = ((value & 0xFFFFFFFF00000000FFFFFFFF00000000) >> 32) | ((value & 0x00000000FFFFFFFF00000000FFFFFFFF) << 32)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L282-L284)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L275-L286


 - [ ] ID-59
[Bytes.reverseBytes32(bytes32)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L258-L272) uses literals with too many digits:
	- [value = ((value >> 64) & 0x0000000000000000FFFFFFFFFFFFFFFF0000000000000000FFFFFFFFFFFFFFFF) | ((value & 0x0000000000000000FFFFFFFFFFFFFFFF0000000000000000FFFFFFFFFFFFFFFF) << 64)](node_modules/@openzeppelin/contracts/utils/Bytes.sol#L268-L270)

node_modules/@openzeppelin/contracts/utils/Bytes.sol#L258-L272


## immutable-states
Impact: Optimization
Confidence: High
 - [ ] ID-60
[Staking.priceFeed](contracts/Staking.sol#L9) should be immutable 

contracts/Staking.sol#L9


 - [ ] ID-61
[Staking.token](contracts/Staking.sol#L8) should be immutable 

contracts/Staking.sol#L8


