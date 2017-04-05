Search.setIndex({envversion:50,filenames:["authors","contributing","history","index","installation","license","modules","outrigger","outrigger.commandline","outrigger.common","outrigger.index","outrigger.index.adjacencies","outrigger.index.events","outrigger.io","outrigger.io.bam","outrigger.io.core","outrigger.io.gtf","outrigger.io.star","outrigger.psi","outrigger.psi.compute","outrigger.region","outrigger.tests","outrigger.tests.conftest","outrigger.tests.index","outrigger.tests.index.test_adjacencies","outrigger.tests.index.test_events","outrigger.tests.index.test_region","outrigger.tests.io","outrigger.tests.io.test_bam","outrigger.tests.io.test_gtf","outrigger.tests.io.test_star","outrigger.tests.psi","outrigger.tests.psi.test_compute","outrigger.tests.test_commandline","outrigger.tests.validate","outrigger.tests.validate.test_check_splice_sites","outrigger.util","outrigger.validate","outrigger.validate.check_splice_sites","releases/template","releases/v0.1.0","releases/v0.2.0","releases/v0.2.1","releases/v0.2.2","releases/v0.2.3","releases/v0.2.4","releases/v0.2.5","releases/v0.2.6","releases/v0.2.7","releases/v0.2.8","releases/v0.2.9","releases/v1.0.0","releases/v1.0.1","subcommands/outrigger_index","subcommands/outrigger_psi","subcommands/outrigger_validate","tutorial","usage"],objects:{"":{outrigger:[7,0,0,"-"]},"outrigger.commandline":{CommandLine:[8,1,1,""],Index:[8,1,1,""],Psi:[8,1,1,""],Subcommand:[8,1,1,""],SubcommandAfterIndex:[8,1,1,""],Usage:[8,5,1,""],Validate:[8,1,1,""],main:[8,6,1,""]},"outrigger.commandline.CommandLine":{do_usage_and_die:[8,2,1,""],index:[8,2,1,""],psi:[8,2,1,""],validate:[8,2,1,""]},"outrigger.commandline.Index":{execute:[8,2,1,""],get_event_attributes:[8,2,1,""],make_events_by_traversing_graph:[8,2,1,""],make_exon_junction_adjacencies:[8,2,1,""],make_graph:[8,3,1,""],max_de_novo_exon_length:[8,4,1,""],splice_abbrevs:[8,4,1,""],write_new_gtf:[8,2,1,""]},"outrigger.commandline.Psi":{execute:[8,2,1,""],folders:[8,4,1,""],junction_id_col:[8,4,1,""],maybe_get_validated_events:[8,2,1,""],maybe_read_junction_reads:[8,2,1,""],psi_folder:[8,4,1,""],reads_col:[8,4,1,""],required_cols:[8,4,1,""],sample_id_col:[8,4,1,""],splice_type_folders:[8,4,1,""],validate_junction_reads_data:[8,2,1,""]},"outrigger.commandline.Subcommand":{csv:[8,2,1,""],debug:[8,4,1,""],filter_junctions_on_reads:[8,2,1,""],folders:[8,4,1,""],force:[8,4,1,""],gffutils_db:[8,4,1,""],gtf_filename:[8,4,1,""],gtf_folder:[8,4,1,""],ignore_multimapping:[8,4,1,""],index_folder:[8,4,1,""],junction_metadata:[8,3,1,""],junction_reads_filename:[8,4,1,""],junctions_folder:[8,4,1,""],make_junction_reads_file:[8,2,1,""],maybe_make_db:[8,2,1,""],maybe_make_folder:[8,2,1,""],maybe_overwrite:[8,2,1,""],min_reads:[8,4,1,""],output_folder:[8,4,1,""],reads_col:[8,4,1,""],resume:[8,4,1,""],sj_out_tab:[8,4,1,""]},"outrigger.commandline.SubcommandAfterIndex":{folders:[8,4,1,""],input_index:[8,4,1,""]},"outrigger.commandline.Validate":{execute:[8,2,1,""],exon_pair_splice_sites:[8,2,1,""],individual_exon_splice_sites:[8,2,1,""]},"outrigger.index":{adjacencies:[11,0,0,"-"],events:[12,0,0,"-"]},"outrigger.index.adjacencies":{ExonJunctionAdjacencies:[11,1,1,""],is_there_an_exon_here:[11,6,1,""]},"outrigger.index.adjacencies.ExonJunctionAdjacencies":{detect_exons_from_junctions:[11,2,1,""],exon_types:[11,4,1,""],junctions_adjacent_to_this_exon:[11,2,1,""],upstream_downstream_exons:[11,2,1,""],write_de_novo_exons:[11,2,1,""]},"outrigger.index.events":{EventMaker:[12,1,1,""],SpliceGraph:[12,1,1,""],make_splice_graph_find_events:[12,6,1,""],opposite:[12,6,1,""],stringify_location:[12,6,1,""]},"outrigger.index.events.EventMaker":{add_event_id_col:[12,2,1,""],add_incompatible_junctions:[12,2,1,""],event_dict_to_df:[12,2,1,""],exon_progress_interval:[12,4,1,""],find_events:[12,2,1,""]},"outrigger.index.events.SpliceGraph":{alternative_events:[12,2,1,""],exons_one_junction_downstream:[12,2,1,""],exons_one_junction_upstream:[12,2,1,""],exons_two_junctions_downstream:[12,2,1,""],junctions_between_exons:[12,2,1,""],single_exon_alternative_events:[12,2,1,""]},"outrigger.io":{bam:[14,0,0,"-"],core:[15,0,0,"-"],gtf:[16,0,0,"-"],star:[17,0,0,"-"]},"outrigger.io.bam":{bam_to_junction_reads_table:[14,6,1,""],read_multiple_bams:[14,6,1,""]},"outrigger.io.core":{add_exons_and_junction_ids:[15,6,1,""]},"outrigger.io.gtf":{SplicingAnnotator:[16,1,1,""],create_db:[16,6,1,""],location_to_feature:[16,6,1,""],maybe_analyze:[16,6,1,""],transform:[16,6,1,""]},"outrigger.io.gtf.SplicingAnnotator":{attributes:[16,2,1,""],event_introns_regions:[16,2,1,""],exon_bedfiles:[16,2,1,""],maybe_get_feature:[16,2,1,""]},"outrigger.io.star":{int_to_junction_motif:[17,6,1,""],make_metadata:[17,6,1,""],read_multiple_sj_out_tab:[17,6,1,""],read_sj_out_tab:[17,6,1,""]},"outrigger.psi":{compute:[19,0,0,"-"]},"outrigger.psi.compute":{calculate_psi:[19,6,1,""]},"outrigger.region":{Region:[20,1,1,""]},"outrigger.region.Region":{chrom:[20,4,1,""],name:[20,4,1,""],overlaps:[20,2,1,""],region:[20,4,1,""],start:[20,4,1,""],stop:[20,4,1,""],strand:[20,4,1,""],to_bed_format:[20,2,1,""],to_zero_based:[20,2,1,""]},"outrigger.tests":{conftest:[22,0,0,"-"],index:[23,0,0,"-"],io:[27,0,0,"-"],psi:[31,0,0,"-"],test_commandline:[33,0,0,"-"],validate:[34,0,0,"-"]},"outrigger.tests.conftest":{bam_filenames:[22,6,1,""],data_folder:[22,6,1,""],db:[22,6,1,""],db_filename:[22,6,1,""],gtf_filename:[22,6,1,""],ignore_multimapping:[22,6,1,""],junction_metadata:[22,6,1,""],junction_reads:[22,6,1,""],myl6_novel_exon_junction:[22,6,1,""],n_jobs:[22,6,1,""],negative_control_folder:[22,6,1,""],negative_control_output:[22,6,1,""],outrigger_folder:[22,6,1,""],simulated:[22,6,1,""],simulated_outrigger_index:[22,6,1,""],simulated_outrigger_mxe:[22,6,1,""],simulated_outrigger_output:[22,6,1,""],simulated_outrigger_psi:[22,6,1,""],simulated_outrigger_se:[22,6,1,""],simulated_unprocessed:[22,6,1,""],sj_filenames:[22,6,1,""],snap25_exon_id:[22,6,1,""],splice_type:[22,6,1,""],strand:[22,6,1,""],tasic2016:[22,6,1,""],tasic2016_bam:[22,6,1,""],tasic2016_gtf:[22,6,1,""],tasic2016_intermediate:[22,6,1,""],tasic2016_intermediate_bam:[22,6,1,""],tasic2016_intermediate_psi:[22,6,1,""],tasic2016_outrigger_junctions:[22,6,1,""],tasic2016_outrigger_output:[22,6,1,""],tasic2016_outrigger_output_bam:[22,6,1,""],tasic2016_outrigger_output_index:[22,6,1,""],tasic2016_outrigger_output_psi:[22,6,1,""],tasic2016_sj_out_tab:[22,6,1,""],tasic2016_unprocessed:[22,6,1,""]},"outrigger.tests.index":{test_adjacencies:[24,0,0,"-"],test_events:[25,0,0,"-"],test_region:[26,0,0,"-"]},"outrigger.tests.index.test_adjacencies":{TestExonJunctionAdjacencies:[24,1,1,""]},"outrigger.tests.index.test_adjacencies.TestExonJunctionAdjacencies":{adjacencies:[24,2,1,""],adjacent_in_genome:[24,2,1,""],adjacent_in_genome_downstream:[24,2,1,""],adjacent_in_genome_template:[24,2,1,""],adjacent_in_genome_upstream:[24,2,1,""],snap25_exon:[24,2,1,""],test___init:[24,2,1,""],test___init_missing_required_column:[24,2,1,""],test__adjacent_junctions_single_exon:[24,2,1,""],test__junctions_genome_adjacent_to_exon:[24,2,1,""],test__single_junction_exon_triple:[24,2,1,""],test__to_stranded_transcript_adjacency:[24,2,1,""],test_neighboring_exons:[24,2,1,""]},"outrigger.tests.index.test_events":{TestEventMaker:[25,1,1,""],TestSpliceGraph:[25,1,1,""],assert_graph_items_equal:[25,6,1,""],chrom:[25,6,1,""],exon_start_stop:[25,6,1,""],graph_items:[25,6,1,""],junction_exon_triples:[25,6,1,""],junction_to_exons:[25,6,1,""],region:[25,6,1,""],test_stringify_location:[25,6,1,""],transcripts:[25,6,1,""]},"outrigger.tests.index.test_events.TestEventMaker":{event_maker:[25,2,1,""],events_csv:[25,2,1,""],strand_name:[25,2,1,""],test_a3ss:[25,2,1,""],test_a5ss:[25,2,1,""],test_afe:[25,2,1,""],test_ale:[25,2,1,""],test_finding_events:[25,2,1,""],test_init:[25,2,1,""]},"outrigger.tests.index.test_events.TestSpliceGraph":{exon1_i:[25,2,1,""],exon1_name:[25,2,1,""],mutually_exclusive_events:[25,2,1,""],skipped_exon_events:[25,2,1,""],splice_graph:[25,2,1,""],test___init__:[25,2,1,""],test__mutually_exclusive_exon:[25,2,1,""],test__skipped_exon:[25,2,1,""],test_exons_one_junction_upstream:[25,2,1,""],test_exons_two_junctions_downstream:[25,2,1,""],test_junctions_between_exons:[25,2,1,""],test_single_exon_alternative_events:[25,2,1,""]},"outrigger.tests.index.test_region":{TestRegion:[26,1,1,""],location:[26,6,1,""],location_with_region_name:[26,6,1,""]},"outrigger.tests.index.test_region.TestRegion":{test___eq:[26,2,1,""],test___eq_not_region:[26,2,1,""],test___init:[26,2,1,""],test___init_region_name:[26,2,1,""],test___init_start_larger_than_stop:[26,2,1,""],test___len:[26,2,1,""],test___neq:[26,2,1,""],test___str:[26,2,1,""],test___str_with_region_name:[26,2,1,""],test__start:[26,2,1,""],test__stop:[26,2,1,""],test_overlaps_false_different_chrom:[26,2,1,""],test_overlaps_false_same_chrom:[26,2,1,""],test_overlaps_true:[26,2,1,""]},"outrigger.tests.io":{test_bam:[28,0,0,"-"],test_gtf:[29,0,0,"-"],test_star:[30,0,0,"-"]},"outrigger.tests.io.test_bam":{bamfile:[28,6,1,""],empty:[28,6,1,""],multi:[28,6,1,""],multi_csv:[28,6,1,""],multiple_bams_reads_table_csvs:[28,6,1,""],read_intermediate_junctions:[28,6,1,""],single_bam_combined_uniquely_multi_csv:[28,6,1,""],single_bam_final_junction_reads_table_csv:[28,6,1,""],suffix_template:[28,6,1,""],test__choose_strand_and_sum:[28,6,1,""],test__combine_uniquely_multi:[28,6,1,""],test__get_junction_reads:[28,6,1,""],test__report_read_positions:[28,6,1,""],test_bam_to_junction_reads_table:[28,6,1,""],test_read_multiple_bams:[28,6,1,""],uniquely:[28,6,1,""],uniquely_csv:[28,6,1,""],uniquely_summed_csv:[28,6,1,""]},"outrigger.tests.io.test_gtf":{test_create_db:[29,6,1,""]},"outrigger.tests.io.test_star":{sj_out_tab:[30,6,1,""],splice_junction_csv:[30,6,1,""],test_int_to_intron_motif:[30,6,1,""],test_make_metadata:[30,6,1,""],test_read_multiple_sj_out_tab:[30,6,1,""],test_read_sj_out_tab:[30,6,1,""]},"outrigger.tests.psi":{test_compute:[32,0,0,"-"]},"outrigger.tests.psi.test_compute":{dummy_events:[32,6,1,""],dummy_exons_to_junctions:[32,6,1,""],dummy_isoform1_junction_ids:[32,6,1,""],dummy_isoform1_junction_numbers:[32,6,1,""],dummy_isoform1_reads:[32,6,1,""],dummy_isoform2_junction_ids:[32,6,1,""],dummy_isoform2_junction_numbers:[32,6,1,""],dummy_isoform2_reads:[32,6,1,""],dummy_isoform_junctions:[32,6,1,""],dummy_isoform_reads:[32,6,1,""],dummy_junction12:[32,6,1,""],dummy_junction13:[32,6,1,""],dummy_junction14:[32,6,1,""],dummy_junction23:[32,6,1,""],dummy_junction24:[32,6,1,""],dummy_junction34:[32,6,1,""],dummy_junction_locations:[32,6,1,""],dummy_junction_number_to_id:[32,6,1,""],dummy_legal_junction_numbers:[32,6,1,""],dummy_splice_junction_reads:[32,6,1,""],event_annotation:[32,6,1,""],event_annotation_csv:[32,6,1,""],event_df_csv:[32,6,1,""],event_id:[32,6,1,""],incompatible_junctions:[32,6,1,""],isoform1_junctions:[32,6,1,""],isoform2_junctions:[32,6,1,""],isoform_read_coverage:[32,6,1,""],junction_reads_for_rejecting:[32,6,1,""],mutually_exclusive_exon_junction_reads_for_rejecting:[32,6,1,""],mutually_exclusive_exon_junction_reads_for_rejecting_csv:[32,6,1,""],psi_csv:[32,6,1,""],psi_df:[32,6,1,""],reads2d:[32,6,1,""],single_event_summary_csv:[32,6,1,""],skipped_exon_junction_reads_for_rejecting:[32,6,1,""],skipped_exon_junction_reads_for_rejecting_csv:[32,6,1,""],splice_junction_reads:[32,6,1,""],splice_junction_reads_csv:[32,6,1,""],summary_csv:[32,6,1,""],summary_df:[32,6,1,""],test__check_unequal_read_coverage:[32,6,1,""],test__maybe_parallelize_psi:[32,6,1,""],test__single_event_psi:[32,6,1,""],test__single_isoform_maybe_reject:[32,6,1,""],test_calculate_psi:[32,6,1,""]},"outrigger.tests.test_commandline":{TestCommandLine:[33,1,1,""],TestSubcommand:[33,1,1,""],assert_directories_equal:[33,6,1,""]},"outrigger.tests.test_commandline.TestCommandLine":{test_help:[33,2,1,""],test_main_index:[33,2,1,""],test_main_index_bam:[33,2,1,""],test_main_index_parallelized:[33,2,1,""],test_main_index_reads_csv:[33,2,1,""],test_main_psi:[33,2,1,""],test_main_psi_bam:[33,2,1,""],test_main_psi_parallelized:[33,2,1,""],test_main_validate:[33,2,1,""],test_main_version:[33,2,1,""],test_no_arguments:[33,2,1,""]},"outrigger.tests.test_commandline.TestSubcommand":{test___init__:[33,2,1,""]},"outrigger.tests.validate":{test_check_splice_sites:[35,0,0,"-"]},"outrigger.tests.validate.test_check_splice_sites":{direction:[35,6,1,""],do_not_have_mysql:[35,6,1,""],exon2_bed:[35,6,1,""],genome_name:[35,6,1,""],maybe_chromsizes:[35,6,1,""],simulated_chromsizes:[35,6,1,""],simulated_fasta:[35,6,1,""],test_maybe_read_chromsizes:[35,6,1,""],test_read_splice_sites:[35,6,1,""],test_splice_site_str_to_tuple:[35,6,1,""]},"outrigger.util":{done:[36,6,1,""],extract_alternative_constitutive:[36,6,1,""],progress:[36,6,1,""],timestamp:[36,6,1,""]},"outrigger.validate":{check_splice_sites:[38,0,0,"-"]},"outrigger.validate.check_splice_sites":{maybe_read_chromsizes:[38,6,1,""],read_splice_sites:[38,6,1,""],splice_site_str_to_tuple:[38,6,1,""]},outrigger:{commandline:[8,0,0,"-"],common:[9,0,0,"-"],index:[10,0,0,"-"],io:[13,0,0,"-"],psi:[18,0,0,"-"],region:[20,0,0,"-"],tests:[21,0,0,"-"],util:[36,0,0,"-"],validate:[37,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:exception","6":"py:function"},terms:{"04316b6":1,"0dev":3,"0rc1":1,"150ppi":1,"2nd":12,"300ppi":1,"82b6296":1,"9c80211":1,"\u03c8":3,"boolean":24,"break":[1,2,44,45,47,50],"case":[2,51],"class":[8,11,12,16,20,24,25,26,33],"default":[1,2,3,19,36,50,53,54],"final":3,"function":[1,2,16,17,25],"import":53,"int":[11,12,19,36],"long":53,"new":1,"return":[8,11,12,16,17,19,20,36],"static":8,"true":[8,17,20,30],"try":[3,53],"while":[2,51],__all__:[2,43],_build:1,_deploi:1,_imag:1,_modul:1,_sourc:1,_static:1,about:[1,12,53],abov:[5,53,54],absolut:22,access:12,accident:53,across:[2,51],action:[8,53],activ:[1,3],activat:3,actual:[2,42,45],actualli:[2,45],add:[1,2,3,12,17,44,48,50,52],add_event_id_col:12,add_exons_and_junction_id:15,add_incompatible_junct:12,added:[2,39,41,46,48,51],adjac:[7,8,10],adjacent_in_genom:24,adjacent_in_genome_downstream:24,adjacent_in_genome_templ:24,adjacent_in_genome_upstream:24,adjust:2,adult:53,advanc:3,advised:5,afe:12,after:[2,47,55],aggreg:19,ahead:8,ale:12,align:[2,3,17,50,53,54],all:[1,2,3,5,11,12,16,19,25,51,53,54,57],allow:1,alreadi:[1,53],also:[2,51],altern:2,alternative_ev:12,alwai:[1,20],amount:19,anaconda:3,analysi:[3,53],analyze:2,ani:[1,20],annot:[1,3,5,8,11,12,16,17],annotat:[11,16],anoth:12,any:[1,5],anyth:1,anywai:52,appear:53,appli:[53,54],appreci:1,appropri:54,apr:1,arabdopsi:1,arg:33,argument:[3,53,54],arising:5,articl:1,ask:[33,53],assert:33,assert_directories_equ:33,assert_graph_items_equ:25,assum:[54,55],assume:[1,20],attribut:[8,12,16,20,48,53],auto:53,avail:[1,2,3,50,53,54],avoid:48,backslash:53,backward:53,bak:53,bam:2,bam_filenam:[14,22,28,33],bam_to_junction_reads_t:14,bamfil:28,bams:[53,54],barebon:17,base:[8,11,12,16,17,19,20,24,25,26,33],basenam:17,basic:16,becaus:[19,53],bed:[3,5,38,53,54,55],bedtool:[3,38],been:54,befor:[1,2,19,45],below:[3,53,54,57],best:1,between:[11,12,19,32],big:53,bigger:19,binari:5,bioconda:[1,3],biolog:3,bit:1,blog:1,bool:[8,17],both:[1,2,3,54],botvinnik:[0,5],branch:1,browser:1,bsd:[3,5],bugfix:1,build:[1,3],built:[3,53],business:5,c68a887:1,calcul:[1,2],calculate_psi:19,call:[3,8,17,53,54,55],can:[1,2,3,8,19,50,51,54],cannot:[12,54],canon:2,capsi:[25,32,33],caused:5,cav_lp_ipsi_tdtpo:53,cell:53,certain:12,chang:1,channel:3,check_splice_sit:[7,37],checklist:1,checkout:1,chr1:[16,20],chr4:2,chrom:[11,12,16,17,20,25,55],chromosom:[2,38,51,55],chromsom:2,clarifi:[2,47],claus:5,cleanli:8,clone:[1,3,53],col:[8,54],column:[11,12,17,19,54],com:[0,1,3],combin:[12,32,53],command:[1,2,3,4,39,41,44,45,51],commandlin:[1,6,7],commit:1,common:[6,7],compar:33,compat:[19,52],compil:8,compiled_junction_reads:[53,54],complain:[2,8,53],complet:[1,32],complex:19,compress:1,comput:[1,7,18],concaten:[2,8,17,47],conda:[1,3],condit:5,config:3,configur:16,conftest:[7,21],consequential:5,consid:[53,54],consist:8,constitut:[2,36,51],constitutively0:36,constitutively1:36,contain:[3,17,20,53,54],content:[3,6],continu:53,contract:5,contributors:5,convert:[12,20],coordin:20,copi:[1,2,44],copyright:5,core:[1,7,13],correct:3,correspond:[2,11,19,51],cortic:53,could:[1,11],count:[1,2,17,51,53,54],cover:1,coverag:1,cowardli:2,creat:[1,2,3,8,11,14,16,17,19,22,51,53],create_db:16,creation:11,critic:8,csv:[2,3,8,28,51],csvs_for_pap:53,custom:3,damage:5,damages:5,data:[2,3,5,8,22,41],data_fold:22,databas:[2,3,8,11,12,16,48,53,57],datafram:[11,12,16,17,19,36,53],dataset:[32,53],date:1,db_filenam:[16,22],deactiv:1,debug:[2,8,45,53,54],defin:[1,11,20,53],definit:[12,53],delet:1,delta:1,denot:19,depend:[2,30,42],deploi:1,deploy:1,deriv:5,describ:[11,53],descript:1,deserv:57,despair:3,detail:1,detect:2,detect_exons_from_junct:11,dict:[16,24,32],differ:[1,8,16,30],dir1:33,dir2:33,direct:[1,5,8,11,12,35,38,53],directori:[1,2,3,47,53,54,55],disclaim:5,disclaimed:5,distribut:[3,5],do_not_have_mysql:35,do_usage_and_di:8,doc:1,docstr:1,doe:[53,54],doesn:[8,53],don:[2,41,45],done:[1,36,53],doubl:[2,51],downstream:[11,12,22,24,38],downstream_exon:12,driven:1,due:1,dummy_ev:32,dummy_exons_to_junct:32,dummy_isoform1_junction_id:32,dummy_isoform1_junction_numb:32,dummy_isoform1_read:32,dummy_isoform2_junction_id:32,dummy_isoform2_junction_numb:32,dummy_isoform2_read:32,dummy_isoform_junct:32,dummy_isoform_read:32,dummy_junction12:32,dummy_junction13:32,dummy_junction14:32,dummy_junction23:32,dummy_junction24:32,dummy_junction34:32,dummy_junction_loc:32,dummy_junction_number_to_id:32,dummy_legal_junction_numb:32,dummy_splice_junction_read:32,each:[2,3,11,12,16,17,19,51,57],easi:3,easier:[1,53],easy_instal:4,echo:1,either:[8,19,20],element:19,els:11,empti:28,encount:8,end:[3,11],endors:5,enforc:1,ensembl:[1,2,53],ensure:[3,8],env:[1,3],environ:[1,3],equal:33,equival:[53,54],error:8,even:[1,2,5,8,41,45],event:[1,2,3,5,7,8,10],event_annot:[19,32],event_annotation_csv:32,event_col:19,event_df:8,event_df_csv:32,event_dict_to_df:12,event_id:32,event_introns_region:16,event_mak:[8,25],eventmak:12,events_csv:25,eventu:8,everi:1,evok:8,exact:[2,50],exactli:[53,54],exampl:[1,2,3,47],example_data:53,except:8,exception:8,exclus:53,execut:8,exemplary:5,exist:[8,11,25,35,53],exit:[2,3,8,53,54],exon1:[3,11,12,19,22,53,54,55],exon1_i:25,exon1_nam:25,exon2:[3,19,53,54,55],exon2_b:35,exon3:[3,19,53,54,55],exon4:[3,53,54,55],exon:[2,3,8,11,12,16,19,20,22,32,33,38,39,41,45,47,48,51,53],exon_a:12,exon_b:12,exon_bedfil:16,exon_col:[8,12],exon_direction_junction_tripl:3,exon_i:12,exon_nam:12,exon_pair_splice_sit:8,exon_progress_interv:12,exon_queri:12,exon_start:[11,17],exon_start_stop:25,exon_stop:[11,17],exon_typ:11,exon_vs_junction_start_stop:1,exona:[8,11,12],exonb:[8,11,12],exonjunctionadjac:11,exons_one_junction_downstream:12,exons_one_junction_upstream:12,exons_two_junctions_downstream:12,explain:[1,19],explan:57,explicit:53,explicitli:52,express:5,extract:[2,17,51],extract_alternative_constitut:36,fa0420c:1,factor:19,fail:33,fake:32,fall:53,fals:[8,11,14,17],fasta:[3,38,55],feature_id:16,featuredb:[11,12,16],featuretyp:16,file:[1,2],filenam:[8,11,17,53],filter:57,filter_junctions_on_read:8,find:[2,3,11,25,39,41,45,51,53],find_ev:12,first:[0,2,3,51],fitness:5,flag:[2,51,53,54],flake8:1,flank:53,folder:[1,3,8,16,22,53,54,55],follow:[3,5,53,55],footprint:[2,51],forc:[1,2,8,53],fork:1,form:[5,20],found:[2,3,16,19,51],free:[3,5],freedom:5,freez:53,from:[1,2],gap:11,gencod:[1,3,53,54,55],gencode:[1,53],gene:[11,12,16],genom:[1,2,3,12,20,38,53,54,55],genome_nam:35,get_event_attribut:8,gffutil:[2,8,11,12,16,22,53],gffutils_db:[8,53],gh_page:1,giant:48,git:[1,3],github:1,give:33,given:[1,3,8,53,54],gmail:0,goods:5,govern:19,graph1:25,graph2:25,graph:[3,8,11,53],graph_item:25,graphlit:12,grcm38:[3,53,55],greatli:1,gtf:[1,2,3,7,8,11,13],gtf_filenam:[8,16,22,29],gtf_filename:53,gtf_folder:8,had:[2,45],handl:17,have:[1,2,3,4,11,41,53,54,55],help:[1,3,33],here:1,hg19:53,history:[2,49],holder:5,holders:5,home:53,hop:12,however:5,html:1,http:[1,3],human:53,identfi:12,identifi:12,if_overwrit:8,ignor:[33,53,54],ignore_multimap:[8,14,17,22,28,30],immedi:12,implied:5,improv:[2,50],incidental:5,includ:[1,2,3,16,17,36,42,43,53,54],include:53,including:5,incompat:12,incompatible_junct:32,incorrect:8,indent:48,index:[1,2,3,6,7,8],index_fold:8,indic:[2,11,51],indirect:5,individual_exon_splice_sit:8,infer:53,info:[2,8,48],inform:[12,16,17,53,54],initi:[2,40],initial:11,input:2,input_index:8,input_opt:8,insert:1,instal:[1,2,3,4,44],install:1,instead:[1,2,3,52],insuffici:[2,51],int_to_junction_motif:17,integer:12,interest:38,intermedi:[22,53],interrupt:[2,53],interruption:5,intron:[3,16,48,53,54,55,57],intron_motif:17,intron_start:17,intron_stop:17,inv:1,is_there_an_exon_her:11,isoform1:[19,32],isoform1_junct:[19,32],isoform2:[19,32],isoform2_junct:[19,32],isoform:[16,19],isoform_read_coverag:32,issu:1,item:[11,48],items1:25,items2:25,iter:17,januari:53,job:[1,2,50,53,54],joblib:[2,46],juction:11,judg:[2,51],jump:1,junction12:[11,12,19],junction13:19,junction1:11,junction23:19,junction2:11,junction:[2,3,8,11,12,17,19,22,24,32,33,51],junction_col:12,junction_exon_direction_tripl:[53,54,55],junction_exon_tripl:[8,11,12,25],junction_id:[11,17,54],junction_id_col:[8,54],junction_metadata:[8,22,24],junction_motif:17,junction_nam:12,junction_read:[8,15,22,30,53],junction_reads_filenam:8,junction_reads_for_reject:32,junction_reads_use_multimap:53,junction_start:17,junction_stop:17,junction_to_exon:25,junctions_adjacent_to_this_exon:11,junctions_between_exon:12,junctions_fold:8,junctionx:11,just:[1,3,8],keep:[1,3],kilobas:53,kind:[2,51],know:3,known:53,kwarg:8,larg:19,latest:1,lcscs12345:2,least:57,left:53,length:[48,53],less:[53,54],let:3,level:12,liability:5,liable:5,licens:[1,3],like:[2,3,11,51,53],limited:5,line:[1,4,53],liner:53,link:57,list:[1,5,16,17,19],littl:[1,53],local:1,locat:[12,20,26,38,52,53,54,55],location_to_featur:16,location_with_region_nam:26,locu:[53,54],log:[53,54],logo:[1,52],look:[1,3,57],loss:5,lots:53,low:[2,51],low_memori:1,m10:[3,53,55],main:8,major:[2,3,51],make:[1,3,16,17,53],make_events_by_traversing_graph:8,make_exon_junction_adjac:8,make_graph:8,make_junction_reads_fil:8,make_metadata:17,make_splice_graph_find_ev:12,makefil:1,mammalian:[2,3],mani:[1,2,19,50,53,54],map:[53,54],mapq:[53,54],master:1,match:54,materi:5,matrix:36,max:53,max_de_novo_exon_length:[8,11,53],max_overhang:17,maximum:[1,19,53],maybe_analyz:16,maybe_chroms:35,maybe_get_featur:16,maybe_get_validated_ev:8,maybe_make_db:8,maybe_make_fold:8,maybe_overwrit:8,maybe_read_chroms:38,maybe_read_junction_read:8,mean:[1,2,19,50,53,54],meet:1,memori:[2,51],merchantability:5,mere:53,merg:48,merge_exon_finding_and_junction_adjac:1,messag:[3,36,53,54],met:5,metadata:[3,8,11,17,53,54,55],method:[8,11,12,16,19,20,24,25,26,33],mib:1,might:1,million:19,min:[19,53,54],min_read:[8,19],min_reads:[53,54],mind:3,minimum:[19,53,54],minor:[2,3],minu:17,mkdir:1,mkvirtualenv:[1,4],mm10:[3,55],mode:1,modif:5,modul:[3,6],more:[1,2,12,41,48,52,53],mous:[1,53],move:3,msg:8,multi:28,multi_csv:28,multimap:[17,30,53,54],multimap_junction_read:17,multipl:[28,53,54],multiple_bams_reads_table_csv:28,must:[3,5,8,11,12,20,54,57],mutual:53,mutually_exclusive_ev:25,mutually_exclusive_exon_junction_reads_for_reject:32,mutually_exclusive_exon_junction_reads_for_rejecting_csv:32,mxe:[3,12,16,22,25,53,54,55],myl6:[1,22,53],myl6_novel_exon_junct:22,mysql:35,n_event:19,n_job:[11,12,14,17,19,22,32],n_jobs:[1,53,54],n_junction:17,n_sampl:19,n_tab:36,n_total_junct:19,name:[1,2,3,5,11,16,20,53,54],narrow:1,nat:22,natur:53,necessari:3,need:[1,2,3,45,53],negative_control_fold:[22,33,35],negative_control_output:[22,33],negligence:5,neighbor:[11,53],neither:[5,53],neurosci:[22,53],never:3,next:[3,8,53],non:[2,44,45,47,50],none:[0,8,12,16,20,33],nor:5,note:[3,19],noth:[8,53],notic:[1,5],novel:[2,3,22,39,41,45,53],novel_exon:[3,11,53,54,55],novo:[3,11],now:[1,2,3,45,54,55],number:[1,2,3,19,36,50,51,53,54],object:[1,8,11,12,16,20,24,25,26,33],obotvinnik:53,observ:[17,19],off:[53,54],offici:1,olga:[0,5],olgabot:1,once:1,onli:[1,2,51,52,53,54,57],open:[1,5],oper:[1,2],opposit:12,opt:3,option:[2,3,11,12,19,50,51,53,54,57],order:3,org:1,origin:[1,3,12],other:[1,2,5,17,20,41,53],otherwise:5,out:[1,2],output:[1,2,3,17,22,33,36,47],output_fold:8,outrigg:[1,2],outrigger_fold:22,outrigger_franken:1,outrigger_index:[1,53,54],outrigger_index_flanking_exon:1,outrigger_index_mx:1,outrigger_index_s:1,outrigger_output:[3,8,22,53,54,55],outrigger_overview:1,outrigger_overview_v1:1,outrigger_overview_v2:1,outrigger_psi:[1,3,54],outrigger_psi_pathological_cas:1,outrigger_psi_v1:1,outrigger_psi_v2:1,outrigger_psi_v3:1,outrigger_v2:53,outrigger_valid:1,overal:1,overlap:20,overwrit:[2,8,53],overwritten:8,own:57,pack:1,packag:[1,2,3,6],page:[1,3,57],panda:[11,12,16,17,19,36],parallel:[1,2,39,41,45,47,50,51,53,54],paramet:[3,8,11,12,16,17,19,20,36,38],part:[1,12,20],particular:[5,19],pass:[1,33],patch:[2,44,45,47,52],path:[8,22],pdb:1,pep8:1,per:[53,54],percent:[3,8,19,36,53],percentag:1,perform:[3,48,57],permiss:5,permit:5,pip:[1,4],platform:35,pleas:[1,8],plu:[36,53,55],png:1,point:[2,42,43],popul:53,posit:3,possibility:5,possibl:[1,19,53],post:1,practic:1,prefix:12,prepar:1,prevent:[2,53],previou:[2,44],primary_assembl:[3,55],print:[53,54],prior:5,process:[1,19],processor:[1,2,50],procurement:5,produc:[3,17],product:5,profits:5,program:[3,8,53,54],progress:[36,53],project:[1,3,53],promot:5,proper:[2,41],properli:[2,3,47],propos:1,provid:[3,5,12,53],provided:5,psi:[1,2,3,6,7,8],psi_csv:32,psi_df:32,psi_fold:8,pull_request:1,purpos:53,purpose:5,push:1,put:1,py3:1,pybedtool:[3,38],pypi:[1,3],qualiti:[53,54],quantifi:3,queri:[2,12],quiet:1,rais:8,ran:53,raw:22,read:[2,3,8,11,14,17,19,32,38,51],read_intermediate_junct:28,read_multiple_bam:14,read_multiple_sj_out_tab:17,read_sj_out_tab:17,read_splice_sit:38,readabl:53,readi:1,readme:[1,2,49],reads2d:[19,32],reads_col:[8,54],real:3,realli:8,receiv:1,recommend:[1,2,3,19,50,53],redistribut:5,region:[6,7,11,12,16],reject:19,rel:[1,11,53,54],relationship:[11,25],releas:[1,2,39,40,41,42,43,44,45,47,50,51,52],reli:55,remain:53,rememb:1,remot:1,replac:1,repo:1,repositori:[3,53],repres:19,reproduc:[1,5],requir:[1,2,12,19,42,46,53,54],required_col:8,reserv:5,resolv:1,respect:16,restart:53,resum:[2,8,53],retain:5,retriev:16,reus:1,reveal:53,rewrit:1,right:[5,53],rna:[3,17],root:[1,22],row:[17,19],rst:1,rule:[3,19],sai:3,same:[1,3,19,48,53,54],sampl:[2,3,8,17,19,36,51,54],sample_id:[17,54],sample_id_col:[8,54],sample_id_func:17,saniti:32,save:[53,54],scale:19,scope:1,score:3,script:1,search:[3,8,48],searchindex:1,second:[2,39,41],section:53,see:[1,2,51],segfault:1,self:[11,12],send:1,separ:[1,2,12,36,51,54],seq:3,sequenc:3,services:5,set:[1,22],setup:1,setuptool:1,shall:5,shape:[19,36],should:[1,3,11,22,33],show:[2,3,51,53,54],shown:3,side:19,signal:8,simul:[22,32],simulated_chroms:35,simulated_fasta:35,simulated_outrigger_index:[22,25,32],simulated_outrigger_mx:22,simulated_outrigger_output:22,simulated_outrigger_psi:22,simulated_outrigger_s:22,simulated_unprocess:[22,30],sinc:52,singl:[19,53],single_bam_combined_uniquely_multi_csv:28,single_bam_final_junction_reads_table_csv:28,single_event_summary_csv:32,single_exon_alternative_ev:12,singlecell_pnm:53,singular:28,site:[2,3,38,41,51,54],size:[38,55],sj_filenam:[22,30,33],sj_metadata:11,sj_out_tab:[1,8,30,53,54],skip:53,skipped_exon_ev:25,skipped_exon_junction_reads_for_reject:32,skipped_exon_junction_reads_for_rejecting_csv:32,slice:36,smaller:[2,20,51],smallish:1,snap25:[1,22,53],snap25_exon:24,snap25_exon_id:[22,24,29],snap25_myl6:53,softwar:[3,5],software:5,someth:53,sort:3,sortabl:33,sourc:[1,3,5,8,11,12,14,15,16,17,19,20,22,24,25,26,28,29,30,32,33,35,36,38],span:53,special:5,specif:5,specifi:[1,2,8,19,42,50,51,53,54],sped:2,speed:[2,50],splice:2,splice_abbrev:8,splice_graph:25,splice_junction_csv:30,splice_junction_read:32,splice_junction_reads_csv:32,splice_sit:[3,38,54,55],splice_site_str_to_tupl:38,splice_typ:[8,12,16,22,25,32],splice_type_fold:8,spliced_read:[8,17],splicegraph:12,spliceosom:[2,3],splicesom:3,splicingannot:16,sqlite:2,stall:[2,51],standard:[2,36,53,54],star:[3,7,13],statement:[2,8,43],stdout:[36,53],step:[1,3,8,53,57],still:8,stop:[11,12,16,17,20,53],store:22,str:[8,11,17,20,38],strand:[11,12,16,17,20,22,24,25,26],strand_nam:25,stranded:1,strict:5,string:[8,12,20],stringify_loc:12,structur:[53,55],sub:[3,48],subcommand:8,subcommandafterindex:8,subdirectori:33,subfold:[2,44,54],subject:11,submodul:[2,6],subpackag:6,subprocess:19,subset:[1,53,54,55],substitute:5,suffici:[2,51],suffix:22,suffix_templ:28,suit:1,summari:2,summary_csv:32,summary_df:32,supplement:53,support:[1,2,3],sure:1,suspect:8,svg:1,system:[1,3],systemexit:33,tab:1,tag:1,tall:17,tasic2016:[1,3,22,53],tasic2016_bam:[22,28],tasic2016_gtf:22,tasic2016_intermedi:[22,24,30],tasic2016_intermediate_bam:[22,28],tasic2016_intermediate_psi:[22,32],tasic2016_outrigger_junct:[22,32],tasic2016_outrigger_output:[22,33],tasic2016_outrigger_output_bam:[22,33],tasic2016_outrigger_output_index:[22,32,33],tasic2016_outrigger_output_psi:[22,32],tasic2016_sj_out_tab:22,tasic2016_unprocess:[22,33],tasic2016_v1:3,tasic:[22,53],taxonomi:53,tell:53,term:5,termin:[8,53],test___eq:26,test___eq_not_region:26,test___init:[24,26],test___init__:[25,33],test___init_missing_required_column:24,test___init_region_nam:26,test___init_start_larger_than_stop:26,test___len:26,test___neq:26,test___str:26,test___str_with_region_nam:26,test__adjacent_junctions_single_exon:24,test__check_unequal_read_coverag:32,test__choose_strand_and_sum:28,test__combine_uniquely_multi:28,test__get_junction_read:28,test__junctions_genome_adjacent_to_exon:24,test__maybe_parallelize_psi:32,test__mutually_exclusive_exon:25,test__report_read_posit:28,test__single_event_psi:32,test__single_isoform_maybe_reject:32,test__single_junction_exon_tripl:24,test__skipped_exon:25,test__start:26,test__stop:26,test__to_stranded_transcript_adjac:24,test_a3ss:25,test_a5ss:25,test_adjac:[7,21,23],test_af:25,test_al:25,test_bam:[7,21,27],test_bam_to_junction_reads_t:28,test_calculate_psi:32,test_check_splice_sit:[7,21,34],test_commandlin:[7,21],test_comput:[7,21,31],test_create_db:29,test_data:1,test_ev:[7,21,23],test_exons_one_junction_upstream:25,test_exons_two_junctions_downstream:25,test_finding_ev:25,test_gtf:[7,21,27],test_help:33,test_init:25,test_int_to_intron_motif:30,test_junctions_between_exon:25,test_main_index:33,test_main_index_bam:33,test_main_index_parallel:33,test_main_index_reads_csv:33,test_main_psi:33,test_main_psi_bam:33,test_main_psi_parallel:33,test_main_valid:33,test_main_vers:33,test_make_metadata:30,test_maybe_read_chroms:35,test_neighboring_exon:24,test_no_argu:33,test_outrigg:1,test_overlaps_false_different_chrom:26,test_overlaps_false_same_chrom:26,test_overlaps_tru:26,test_read_multiple_bam:28,test_read_multiple_sj_out_tab:30,test_read_sj_out_tab:30,test_read_splice_sit:35,test_region:[7,21,23],test_single_exon_alternative_ev:25,test_splice_site_str_to_tupl:35,test_star:[7,21,27],test_stringify_loc:25,testcommandlin:33,testeventmak:25,testexonjunctionadjac:24,testregion:26,testsplicegraph:25,testsubcommand:33,than:[8,20,53,54],thank:2,thankfulli:3,thei:[1,2,3,33],them:[1,2,3,41,53],theory:5,thi:[1,2,3,5,8,11,12,14,19,20,35,36,39,40,41,42,43,44,45,47,50,51,52,53,54,55],thing:[53,54],think:53,those:[16,53,57],though:[2,8,41],thread:[53,54],three:11,through:1,tidi:17,time:48,timestamp:36,tmpdir:[30,33],to_bed_format:20,to_zero_bas:20,tort:5,total:[1,17],tox:1,transcript:[11,12,25],transcriptom:53,transform:16,travi:1,tree:[3,53,54,55],tri:53,tripl:[11,53],troubleshoot:1,tue:1,turn:[2,45],two:[11,12,19,20,53],txt:[1,2,42],u12:2,ultim:53,under:5,uneven_coverage_multipli:19,uniqu:[28,53,54],unique_junction_read:17,uniquely_csv:28,uniquely_summed_csv:28,unittest:1,unless:[8,53],unprocess:[1,53],updat:1,update:[2,49],upgrad:[2,50],upstream:[11,12,24,38],upstream_downstream_exon:11,upstream_exon:12,usag:[3,8,53,54],usage:[3,8],use:[5,11],used:8,user:[2,3,8,33,51,53],utc:1,util:[6,7],v19:53,valid:[2,3,6,7,8,21],validate_junction_reads_data:8,valu:[3,19,36,53,54],variabl:11,verb:11,veri:[3,19],versa:25,version:[1,2,3,45,48,52,53],via:3,viabl:19,vice:25,virtualenv:1,virtualenvwrapp:[1,4],vm10:[1,3,53,54,55],volunt:1,wai:[1,53],want:[1,3,8,12,17,38,53],warn:53,warranties:5,wasn:[2,8,47],way:5,web:1,websit:1,weird:1,welcom:1,were:[2,51],what:[1,53,54],when:[1,2,8,44,51,53,54],where:[1,3,8,11,17,19,22,53,54],whether:[1,2,5,30,51],which:[1,2,3,11,12,16,17,19,38,42,43,50,51,53,54],whoever:1,whose:[12,38],why:[0,19],wish:53,without:[1,5],work:[1,2,3,44],would:[1,3,19],wrapper:3,write_de_novo_exon:11,write_new_gtf:8,written:[2,5,45],wrong:53,yeolab:[1,3,53],yet:[0,2,41],yml:[1,3],you:[1,2,3,4,8,12,17,38,51,53],your:[1,2,3,41],your_name_her:1},titles:["Credits","Contributing","History","Welcome to outrigger&#8217;s documentation!","Installation","License","outrigger","outrigger package","outrigger.commandline module","outrigger.common module","outrigger.index package","outrigger.index.adjacencies module","outrigger.index.events module","outrigger.io package","outrigger.io.bam module","outrigger.io.core module","outrigger.io.gtf module","outrigger.io.star module","outrigger.psi package","outrigger.psi.compute module","outrigger.region module","outrigger.tests package","outrigger.tests.conftest module","outrigger.tests.index package","outrigger.tests.index.test_adjacencies module","outrigger.tests.index.test_events module","outrigger.tests.index.test_region module","outrigger.tests.io package","outrigger.tests.io.test_bam module","outrigger.tests.io.test_gtf module","outrigger.tests.io.test_star module","outrigger.tests.psi package","outrigger.tests.psi.test_compute module","outrigger.tests.test_commandline module","outrigger.tests.validate package","outrigger.tests.validate.test_check_splice_sites module","outrigger.util module","outrigger.validate package","outrigger.validate.check_splice_sites module","v0.3.0 (...)","v0.1.0 (May 25, 2016)","v0.2.0 (September 9th, 2016)","v0.2.1 (September 12th, 2016)","v0.2.2 (September 12th, 2016)","v0.2.3 (September 13th, 2016)","v0.2.4 (September 14th, 2016)","v0.2.5 (September 14th, 2016)","v0.2.6 (September 15th, 2016)","v0.2.7 (...)","v0.2.8 (October 23rd, 2016)","v0.2.9 (November 11th, 2016)","v1.0.0 (April 3rd, 2017)","v1.0.1 (April 3rd, 2017)","<code class=\"docutils literal\"><span class=\"pre\">index</span></code>: Build a <em>de novo</em> splicing annotation index of events custom to <strong>your</strong> data","<code class=\"docutils literal\"><span class=\"pre\">psi</span></code>: Calculate percent spliced-in (Psi/\u03a8) scores for your data from the splicing events you created","<code class=\"docutils literal\"><span class=\"pre\">validate</span></code>: Check that the found exons are real","Flotilla tutorial","Usage"],titleterms:{"11th":[2,50],"12th":[2,42,43],"13th":[2,44],"14th":[2,45,46],"15th":[2,47],"23rd":[2,49],"3rd":[2,51,52],"9th":[2,41],"\u03c8":54,"function":[39,48],"new":[2,39,41,45,48,50,51],accur:3,adjac:11,advanc:56,altern:3,annot:53,api:[2,39,48],april:[2,51,52],bam:[3,14,53],begin:56,bleed:3,bug:[1,2,39,44,45,46,47,48,51],build:53,calcul:[3,54],chang:[2,39,48],check:[1,55],check_splice_sit:38,code:[1,3],command:53,commandlin:8,common:9,compil:53,comput:19,conftest:22,content:[7,10,13,18,21,23,27,31,34,37],contribut:1,contributor:0,core:15,creat:54,credit:0,csv:53,custom:53,dai:56,data:[53,54],debugg:1,detect:3,develop:0,document:[1,3],edg:3,event:[12,53,54],exampl:[53,56],exon:55,fast:3,featur:[1,2,3,39,41,45,48,50,51],feedback:1,file:[3,53],fix:[1,2,39,44,45,46,47,48,51],flotilla:56,found:55,from:[3,54],full:53,get:1,github:3,gtf:16,guidelin:1,help:[53,56],here:3,histori:2,how:1,implement:1,index:[10,11,12,23,24,25,26,53],indice:3,input:[3,53,54,55],installat:[3,4,56],junction:53,lead:0,licens:5,lint:1,mai:[2,40],miscellan:[2,39,47,48,50,51,52],modul:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],novemb:[2,50],novo:53,october:[2,49],out:[3,53],output:[53,54,55],outrigg:[3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],overview:[53,54,55],packag:[7,10,13,18,21,23,27,31,34,37],paper:56,percent:54,plot:[39,48],pre:53,psi:[18,19,31,32,54],pull:1,python:1,quick:3,read:53,real:55,recreat:56,region:20,report:1,request:1,run:1,score:54,septemb:[2,41,42,43,44,45,46,47],splice:[3,53,54],star:17,start:[1,3],style:1,submit:1,submodul:[7,10,13,18,21,23,27,31,34,37],subpackag:[7,21],summari:3,tab:[3,53],tabl:3,test:[1,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],test_adjac:24,test_bam:28,test_check_splice_sit:35,test_commandlin:33,test_comput:32,test_ev:25,test_gtf:29,test_region:26,test_star:30,tip:[1,56],tutori:56,type:1,usage:57,util:36,valid:[34,35,37,38,55],welcom:3,write:1,you:54,your:[53,54]}})