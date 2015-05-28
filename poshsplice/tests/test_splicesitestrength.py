import os

import pandas as pd
import pandas.util.testing as pdt
import pytest
import six

__author__ = 'olgabotvinnik'


@pytest.fixture
def example_three_prime_fasta(tmpdir):
    s = '''> dummy1
ttccaaacgaacttttgtAGgga
> dummy2
tgtctttttctgtgtggcAGtgg
> dummy3
ttctctcttcagacttatAGcaa'''
    filename = '{0}/three_prime.fasta'.format(tmpdir)
    with open(filename, 'w') as f:
        f.write(s)
    return filename


@pytest.fixture
def example_five_prime_fasta(tmpdir):
    s = '''> dummy1
cagGTAAGT
> dummy2
gagGTAAGT
> dummy3
taaATAAGT'''
    filename = '{0}/five_prime.fasta'.format(tmpdir)
    with open(filename, 'w') as f:
        f.write(s)
    return filename


@pytest.fixture(params=[5, 3])
def splice_site_combo(request, example_five_prime_fasta,
                      example_three_prime_fasta):
    if request.param == 5:
        # From actually running the perl program
        true = six.u('''cagGTAAGT	10.86
gagGTAAGT	11.08
taaATAAGT	-0.12
''')
        return example_five_prime_fasta, request.param, true
    if request.param == 3:
        # From actually running the perl program
        true = six.u('''ttccaaacgaacttttgtAGgga	2.89
tgtctttttctgtgtggcAGtgg	8.19
ttctctcttcagacttatAGcaa	-0.08
''')
        return example_three_prime_fasta, request.param, true


def test_score_splice_fasta(splice_site_combo):
    from poshsplice.splicestrength import score_splice_fasta

    fasta, splice_site, true = splice_site_combo
    test = score_splice_fasta(fasta, splice_site)
    pdt.assert_equal(test, true)

@pytest.fixture(params=['string', 'filename'])
def splice_scores(request, splice_site_combo, tmpdir):
    from poshsplice.splicestrength import score_splice_fasta
    fasta, splice_site, true = splice_site_combo
    scores = score_splice_fasta(fasta, splice_site)
    if request.param == 'string':
        return scores
    elif request.param == 'filename':
        filename = '{0}/splice_scores.txt'.format(tmpdir)
        with open(filename, 'w') as f:
            f.write(scores)
        return filename

def test_read_splice_scores(splice_scores):
    from poshsplice.splicestrength import read_splice_scores

    test = read_splice_scores(splice_scores)
    if not os.path.exists(splice_scores):
        filename = six.StringIO(splice_scores)
    else:
        filename = splice_scores
    true = pd.read_table(filename, squeeze=True, header=None,
                         index_col=0)
    pdt.assert_series_equal(test, true)
